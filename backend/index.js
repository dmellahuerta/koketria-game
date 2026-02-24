const Fastify = require('fastify');
const { WebSocket, WebSocketServer } = require('ws');
const { randomUUID } = require('node:crypto');
const pkg = require('./package.json');

const app = Fastify({ logger: true });

const rooms = new Map();
const clients = new Map();

const json = (ok, data, error) => {
  return { ok, data, error };
};

const clamp = (value, min, max) => {
  return Math.max(min, Math.min(max, value));
};

const validNumber = (value) => {
  return Number.isFinite(value);
};

const send = (ws, payload) => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(payload));
  }
};

const getClientById = (id) => {
  for (const client of clients.values()) {
    if (client.id === id) {
      return client;
    }
  }

  return null;
};

const getRoomSummary = (room) => {
  return {
    id: room.id,
    name: room.name,
    players: room.players.size,
    hostId: room.hostId,
    status: room.status,
  };
};

const serializePlayer = (client) => {
  return {
    id: client.id,
    name: client.name,
    state: {
      position: { ...client.state.position },
      rotation: { ...client.state.rotation },
    },
  };
};

const getRoomState = (room) => {
  const players = [];

  room.players.forEach((playerId) => {
    const client = getClientById(playerId);
    if (client) {
      players.push(serializePlayer(client));
    }
  });

  return {
    room: getRoomSummary(room),
    players,
  };
};

const broadcastRoomList = () => {
  const data = Array.from(rooms.values()).map(getRoomSummary);

  for (const socket of clients.keys()) {
    send(socket, {
      type: 'rooms_list',
      ...json(true, data),
    });
  }
};

const broadcastToRoom = (room, payload, excludeClientId = null) => {
  room.players.forEach((playerId) => {
    if (excludeClientId && playerId === excludeClientId) {
      return;
    }

    const client = getClientById(playerId);
    if (client) {
      send(client.ws, payload);
    }
  });
};

const broadcastRoomState = (room) => {
  broadcastToRoom(room, {
    type: 'room_state',
    ...json(true, getRoomState(room)),
  });
};

const leaveCurrentRoom = (client) => {
  if (!client.roomId) {
    return;
  }

  const room = rooms.get(client.roomId);
  client.roomId = null;

  if (!room) {
    return;
  }

  room.players.delete(client.id);

  broadcastToRoom(room, {
    type: 'player_left',
    ...json(true, { playerId: client.id }),
  });

  if (room.players.size === 0) {
    rooms.delete(room.id);
    broadcastRoomList();
    return;
  }

  if (room.hostId === client.id) {
    room.hostId = room.players.values().next().value;
  }

  if (room.status === 'in_game' && room.players.size < 2) {
    room.status = 'finished';
  }

  broadcastRoomState(room);
  broadcastRoomList();
};

const joinRoom = (client, room) => {
  leaveCurrentRoom(client);

  room.players.add(client.id);
  client.roomId = room.id;

  send(client.ws, {
    type: 'room_joined',
    ...json(true, getRoomState(room)),
  });

  broadcastToRoom(room, {
    type: 'player_joined',
    ...json(true, {
      player: serializePlayer(client),
      roomId: room.id,
    }),
  }, client.id);

  broadcastRoomState(room);
  broadcastRoomList();
};

app.get('/health', async () => {
  return json(true, { status: 'up' });
});

app.get('/version', async () => {
  return json(true, { version: pkg.version });
});

const start = async () => {
  const port = Number(process.env.PORT || 3000);

  try {
    await app.listen({ host: '0.0.0.0', port });

    const wss = new WebSocketServer({ noServer: true });

    app.server.on('upgrade', (request, socket, head) => {
      if (request.url !== '/ws') {
        socket.destroy();
        return;
      }

      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
      });
    });

    wss.on('connection', (ws) => {
      const playerId = randomUUID();
      const client = {
        id: playerId,
        name: `Player-${playerId.slice(0, 4)}`,
        roomId: null,
        state: {
          position: { x: Math.random() * 10 - 5, y: 1.7, z: Math.random() * 10 - 5 },
          rotation: { yaw: 0, pitch: 0 },
        },
        ws,
      };

      clients.set(ws, client);

      send(ws, {
        type: 'connected',
        ...json(true, {
          player: serializePlayer(client),
          rooms: Array.from(rooms.values()).map(getRoomSummary),
        }),
      });

      ws.on('message', (raw) => {
        let message;

        try {
          message = JSON.parse(String(raw));
        } catch {
          send(ws, {
            type: 'error',
            ...json(false, null, { code: 'INVALID_JSON', message: 'Mensaje invalido' }),
          });
          return;
        }

        const current = clients.get(ws);
        if (!current) {
          return;
        }

        if (message.type === 'list_rooms') {
          send(ws, {
            type: 'rooms_list',
            ...json(true, Array.from(rooms.values()).map(getRoomSummary)),
          });
          return;
        }

        if (message.type === 'leave_room') {
          leaveCurrentRoom(current);
          send(ws, { type: 'left_room', ...json(true, null) });
          return;
        }

        if (message.type === 'create_room') {
          const roomName = String(message.roomName || '').trim();
          const playerName = String(message.playerName || '').trim();

          if (!roomName) {
            send(ws, {
              type: 'error',
              ...json(false, null, { code: 'INVALID_ROOM_NAME', message: 'Nombre de sala requerido' }),
            });
            return;
          }

          if (playerName) {
            current.name = playerName.slice(0, 24);
          }

          const room = {
            id: randomUUID().slice(0, 8),
            name: roomName.slice(0, 32),
            hostId: current.id,
            status: 'waiting',
            players: new Set(),
          };

          rooms.set(room.id, room);
          joinRoom(current, room);
          return;
        }

        if (message.type === 'join_room') {
          const roomId = String(message.roomId || '').trim();
          const playerName = String(message.playerName || '').trim();
          const room = rooms.get(roomId);

          if (!room) {
            send(ws, {
              type: 'error',
              ...json(false, null, { code: 'ROOM_NOT_FOUND', message: 'Sala no encontrada' }),
            });
            return;
          }

          if (playerName) {
            current.name = playerName.slice(0, 24);
          }

          joinRoom(current, room);
          return;
        }

        if (message.type === 'start_game' || message.type === 'end_game') {
          if (!current.roomId) {
            return;
          }

          const room = rooms.get(current.roomId);
          if (!room) {
            return;
          }

          if (room.hostId !== current.id) {
            send(ws, {
              type: 'error',
              ...json(false, null, { code: 'FORBIDDEN', message: 'Solo el host puede cambiar el estado de partida' }),
            });
            return;
          }

          room.status = message.type === 'start_game' ? 'in_game' : 'finished';

          broadcastToRoom(room, {
            type: 'game_state',
            ...json(true, {
              roomId: room.id,
              status: room.status,
              hostId: room.hostId,
            }),
          });

          broadcastRoomState(room);
          broadcastRoomList();
          return;
        }

        if (message.type === 'player_move') {
          if (!current.roomId) {
            return;
          }

          const room = rooms.get(current.roomId);
          if (!room) {
            return;
          }

          const position = message.position || {};
          const rotation = message.rotation || {};

          if (
            !validNumber(position.x)
            || !validNumber(position.y)
            || !validNumber(position.z)
            || !validNumber(rotation.yaw)
            || !validNumber(rotation.pitch)
          ) {
            return;
          }

          current.state.position = {
            x: clamp(position.x, -200, 200),
            y: clamp(position.y, 0.5, 4),
            z: clamp(position.z, -200, 200),
          };
          current.state.rotation = {
            yaw: clamp(rotation.yaw, -Math.PI * 100, Math.PI * 100),
            pitch: clamp(rotation.pitch, -Math.PI / 2, Math.PI / 2),
          };

          broadcastToRoom(room, {
            type: 'player_move',
            ...json(true, {
              playerId: current.id,
              position: current.state.position,
              rotation: current.state.rotation,
              ts: Date.now(),
            }),
          }, current.id);

          return;
        }

        if (message.type === 'player_shoot') {
          if (!current.roomId) {
            return;
          }

          const room = rooms.get(current.roomId);
          if (!room) {
            return;
          }

          const origin = message.origin || {};
          const direction = message.direction || {};
          const distance = Number(message.distance || 0);

          if (
            !validNumber(origin.x)
            || !validNumber(origin.y)
            || !validNumber(origin.z)
            || !validNumber(direction.x)
            || !validNumber(direction.y)
            || !validNumber(direction.z)
          ) {
            return;
          }

          broadcastToRoom(room, {
            type: 'player_shoot',
            ...json(true, {
              playerId: current.id,
              origin: {
                x: clamp(origin.x, -250, 250),
                y: clamp(origin.y, 0, 10),
                z: clamp(origin.z, -250, 250),
              },
              direction: {
                x: clamp(direction.x, -1, 1),
                y: clamp(direction.y, -1, 1),
                z: clamp(direction.z, -1, 1),
              },
              distance: clamp(distance, 1, 220),
              ts: Date.now(),
            }),
          }, current.id);

          return;
        }

        send(ws, {
          type: 'error',
          ...json(false, null, { code: 'UNKNOWN_EVENT', message: 'Evento no soportado' }),
        });
      });

      ws.on('close', () => {
        const current = clients.get(ws);
        if (!current) {
          return;
        }

        leaveCurrentRoom(current);
        clients.delete(ws);
      });
    });

    app.log.info(`HTTP listo en http://0.0.0.0:${port}`);
    app.log.info(`WS listo en ws://0.0.0.0:${port}/ws`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
