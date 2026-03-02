class UserModel {
  constructor(data = {}) {
    this.id = data.id || null;
    this.name = data.name || '';
  }
}

module.exports = {
  UserModel,
};
