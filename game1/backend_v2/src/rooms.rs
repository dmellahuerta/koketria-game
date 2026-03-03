use std::collections::{HashMap, HashSet};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum RoomMode {
    FreeForAll,
    VersusMatch,
}

impl RoomMode {
    pub fn as_wire(self) -> &'static str {
        match self {
            Self::FreeForAll => "freeforall",
            Self::VersusMatch => "versusmatch",
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum RoomStatus {
    Waiting,
    InGame,
    Cooldown,
    Finished,
}

impl RoomStatus {
    pub fn as_wire(self) -> &'static str {
        match self {
            Self::Waiting => "waiting",
            Self::InGame => "in_game",
            Self::Cooldown => "cooldown",
            Self::Finished => "finished",
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum VersusType {
    OneVsOne,
    TwoVsTwo,
}

impl VersusType {
    pub fn from_wire(v: &str) -> Option<Self> {
        match v.trim().to_lowercase().as_str() {
            "1v1" => Some(Self::OneVsOne),
            "2v2" => Some(Self::TwoVsTwo),
            _ => None,
        }
    }

    pub fn required_players(self) -> usize {
        match self {
            Self::OneVsOne => 2,
            Self::TwoVsTwo => 4,
        }
    }

    pub fn max_players(self) -> usize {
        self.required_players()
    }

    pub fn as_wire(self) -> &'static str {
        match self {
            Self::OneVsOne => "1v1",
            Self::TwoVsTwo => "2v2",
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Team {
    Red,
    Blue,
}

impl Team {
    pub fn opposite(self) -> Self {
        match self {
            Self::Red => Self::Blue,
            Self::Blue => Self::Red,
        }
    }

    pub fn from_wire(v: &str) -> Option<Self> {
        match v.trim().to_lowercase().as_str() {
            "red" => Some(Self::Red),
            "blue" => Some(Self::Blue),
            _ => None,
        }
    }

    pub fn as_wire(self) -> &'static str {
        match self {
            Self::Red => "red",
            Self::Blue => "blue",
        }
    }
}

#[derive(Debug, Clone)]
pub struct Room {
    pub id: String,
    pub name: String,
    pub mode: RoomMode,
    pub status: RoomStatus,
    pub host_id: Option<String>,
    pub players: HashSet<String>,
    pub versus_type: Option<VersusType>,
    pub required_players: usize,
    pub max_players: usize,
    pub teams: HashMap<String, Team>,
    pub ready: HashMap<String, bool>,
    pub is_server_managed: bool,
}

#[derive(Debug, Clone)]
pub struct RoomManager {
    pub rooms: HashMap<String, Room>,
    pub max_custom_rooms: usize,
    pub max_players_per_room: usize,
    custom_counter: u64,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum JoinError {
    RoomNotFound,
    RoomFull,
    MatchAlreadyStarted,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum StartValidationError {
    MissingVersusType,
    NotEnoughPlayers,
    UnbalancedTeams,
    NotAllReady,
}

impl RoomManager {
    pub fn new(max_custom_rooms: usize, max_players_per_room: usize) -> Self {
        Self {
            rooms: HashMap::new(),
            max_custom_rooms,
            max_players_per_room,
            custom_counter: 0,
        }
    }

    pub fn ensure_server_room(&mut self, room_id: &str, room_name: &str) {
        if self.rooms.contains_key(room_id) {
            return;
        }
        self.rooms.insert(
            room_id.to_string(),
            Room {
                id: room_id.to_string(),
                name: room_name.to_string(),
                mode: RoomMode::FreeForAll,
                status: RoomStatus::InGame,
                host_id: None,
                players: HashSet::new(),
                versus_type: None,
                required_players: 0,
                max_players: self.max_players_per_room,
                teams: HashMap::new(),
                ready: HashMap::new(),
                is_server_managed: true,
            },
        );
    }

    pub fn create_versus_room(&mut self, host_id: &str, room_name: Option<&str>) -> Option<String> {
        let custom_rooms = self
            .rooms
            .values()
            .filter(|r| !r.is_server_managed && r.mode == RoomMode::VersusMatch)
            .count();
        if custom_rooms >= self.max_custom_rooms {
            return None;
        }

        self.custom_counter += 1;
        let id = format!("versus-{}", self.custom_counter);
        let name = room_name
            .map(str::trim)
            .filter(|v| !v.is_empty())
            .unwrap_or("Versus Match");
        let versus_type = VersusType::OneVsOne;
        self.rooms.insert(
            id.clone(),
            Room {
                id: id.clone(),
                name: name.to_string(),
                mode: RoomMode::VersusMatch,
                status: RoomStatus::Waiting,
                host_id: Some(host_id.to_string()),
                players: HashSet::new(),
                versus_type: Some(versus_type),
                required_players: versus_type.required_players(),
                max_players: versus_type.max_players(),
                teams: HashMap::new(),
                ready: HashMap::new(),
                is_server_managed: false,
            },
        );
        Some(id)
    }

    pub fn join_room(&mut self, room_id: &str, player_id: &str) -> Result<(), JoinError> {
        let room = self.rooms.get_mut(room_id).ok_or(JoinError::RoomNotFound)?;
        if room.mode == RoomMode::VersusMatch
            && room.status != RoomStatus::Waiting
            && !room.players.contains(player_id)
        {
            return Err(JoinError::MatchAlreadyStarted);
        }
        if !room.players.contains(player_id) && room.players.len() >= room.max_players {
            return Err(JoinError::RoomFull);
        }
        room.players.insert(player_id.to_string());
        room.ready.insert(player_id.to_string(), false);
        if room.mode == RoomMode::VersusMatch && room.status == RoomStatus::Waiting {
            self.rebalance_teams(room_id);
        }
        Ok(())
    }

    pub fn leave_room(&mut self, room_id: &str, player_id: &str) {
        let mut should_delete = false;
        if let Some(room) = self.rooms.get_mut(room_id) {
            room.players.remove(player_id);
            room.ready.remove(player_id);
            room.teams.remove(player_id);
            if room.host_id.as_deref() == Some(player_id) {
                room.host_id = room.players.iter().next().cloned();
            }
            should_delete = !room.is_server_managed && room.players.is_empty();
        }
        if should_delete {
            self.rooms.remove(room_id);
        }
    }

    pub fn set_versus_type(&mut self, room_id: &str, versus_type: VersusType) -> bool {
        let Some(room) = self.rooms.get_mut(room_id) else {
            return false;
        };
        if room.mode != RoomMode::VersusMatch || room.status != RoomStatus::Waiting {
            return false;
        }
        if room.players.len() > versus_type.max_players() {
            return false;
        }
        room.versus_type = Some(versus_type);
        room.required_players = versus_type.required_players();
        room.max_players = versus_type.max_players();
        for player_id in room.players.clone() {
            room.ready.insert(player_id, false);
        }
        self.rebalance_teams(room_id);
        true
    }

    pub fn set_ready(&mut self, room_id: &str, player_id: &str, ready: bool) -> bool {
        let Some(room) = self.rooms.get_mut(room_id) else {
            return false;
        };
        if room.mode != RoomMode::VersusMatch || room.status != RoomStatus::Waiting {
            return false;
        }
        if !room.players.contains(player_id) {
            return false;
        }
        room.ready.insert(player_id.to_string(), ready);
        true
    }

    pub fn switch_team(&mut self, room_id: &str, player_id: &str, target: Option<Team>) -> bool {
        let Some(room) = self.rooms.get_mut(room_id) else {
            return false;
        };
        if room.mode != RoomMode::VersusMatch || room.status != RoomStatus::Waiting {
            return false;
        }
        if !room.players.contains(player_id) {
            return false;
        }
        let current = room.teams.get(player_id).copied().unwrap_or(Team::Red);
        let desired = target.unwrap_or(current.opposite());
        if desired == current {
            return true;
        }
        room.teams.insert(player_id.to_string(), desired);
        room.ready.insert(player_id.to_string(), false);
        true
    }

    pub fn validate_start(&self, room_id: &str) -> Result<(), StartValidationError> {
        let Some(room) = self.rooms.get(room_id) else {
            return Err(StartValidationError::MissingVersusType);
        };
        if room.mode != RoomMode::VersusMatch {
            return Ok(());
        }
        let Some(versus_type) = room.versus_type else {
            return Err(StartValidationError::MissingVersusType);
        };
        if room.players.len() != versus_type.required_players() {
            return Err(StartValidationError::NotEnoughPlayers);
        }
        let team_size = match versus_type {
            VersusType::OneVsOne => 1,
            VersusType::TwoVsTwo => 2,
        };
        let red_count = room
            .players
            .iter()
            .filter(|id| room.teams.get(*id) == Some(&Team::Red))
            .count();
        let blue_count = room
            .players
            .iter()
            .filter(|id| room.teams.get(*id) == Some(&Team::Blue))
            .count();
        if red_count != team_size || blue_count != team_size {
            return Err(StartValidationError::UnbalancedTeams);
        }
        let all_ready = room
            .players
            .iter()
            .all(|id| room.ready.get(id).copied().unwrap_or(false));
        if !all_ready {
            return Err(StartValidationError::NotAllReady);
        }
        Ok(())
    }

    fn rebalance_teams(&mut self, room_id: &str) {
        let Some(room) = self.rooms.get_mut(room_id) else {
            return;
        };
        let team_limit = if room.versus_type == Some(VersusType::TwoVsTwo) {
            2
        } else {
            1
        };

        let mut red_count = room
            .teams
            .iter()
            .filter(|(id, team)| room.players.contains(*id) && **team == Team::Red)
            .count();
        let mut blue_count = room
            .teams
            .iter()
            .filter(|(id, team)| room.players.contains(*id) && **team == Team::Blue)
            .count();

        for player_id in room.players.clone() {
            let current = room.teams.get(&player_id).copied();
            if current.is_some() {
                continue;
            }
            let team = if red_count < team_limit {
                red_count += 1;
                Team::Red
            } else if blue_count < team_limit {
                blue_count += 1;
                Team::Blue
            } else if red_count <= blue_count {
                red_count += 1;
                Team::Red
            } else {
                blue_count += 1;
                Team::Blue
            };
            room.teams.insert(player_id, team);
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn versus_type_defaults_to_1v1() {
        let mut mgr = RoomManager::new(6, 5);
        let room_id = mgr.create_versus_room("h1", Some("x")).expect("room id");
        let room = mgr.rooms.get(&room_id).expect("room");
        assert_eq!(room.versus_type, Some(VersusType::OneVsOne));
        assert_eq!(room.required_players, 2);
        assert_eq!(room.max_players, 2);
        assert_eq!(room.status, RoomStatus::Waiting);
    }

    #[test]
    fn cannot_join_started_versus() {
        let mut mgr = RoomManager::new(6, 5);
        let room_id = mgr.create_versus_room("h1", None).expect("room id");
        {
            let room = mgr.rooms.get_mut(&room_id).expect("room");
            room.status = RoomStatus::InGame;
        }
        let err = mgr.join_room(&room_id, "p1").expect_err("must fail");
        assert_eq!(err, JoinError::MatchAlreadyStarted);
    }

    #[test]
    fn validate_start_needs_balanced_and_ready() {
        let mut mgr = RoomManager::new(6, 5);
        let room_id = mgr.create_versus_room("h1", None).expect("room id");
        assert!(mgr.join_room(&room_id, "p1").is_ok());
        assert!(mgr.join_room(&room_id, "p2").is_ok());

        assert_eq!(
            mgr.validate_start(&room_id),
            Err(StartValidationError::NotAllReady)
        );

        assert!(mgr.set_ready(&room_id, "p1", true));
        assert!(mgr.set_ready(&room_id, "p2", true));
        assert_eq!(mgr.validate_start(&room_id), Ok(()));
    }

    #[test]
    fn two_vs_two_requires_four_players() {
        let mut mgr = RoomManager::new(6, 5);
        let room_id = mgr.create_versus_room("h1", None).expect("room id");
        assert!(mgr.set_versus_type(&room_id, VersusType::TwoVsTwo));
        assert!(mgr.join_room(&room_id, "a").is_ok());
        assert!(mgr.join_room(&room_id, "b").is_ok());
        assert_eq!(
            mgr.validate_start(&room_id),
            Err(StartValidationError::NotEnoughPlayers)
        );
    }
}
