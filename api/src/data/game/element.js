const createId = require('../utils/create-id');

class Element {
  /**
   *
   * @param {object} params
   * @param {string} params.gameId
   * @param {string} params.name
   */
  constructor({ gameId, name } = {}) {
    this.gameId = gameId;
    this.id = createId(name);
    this.name = name;
  }
}

module.exports = Element;
