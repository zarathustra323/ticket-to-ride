const createId = require('./utils/create-id');

class Game {
  constructor({ name } = {}) {
    this.id = createId(name);
    this.name = name;
  }
}

module.exports = Game;
