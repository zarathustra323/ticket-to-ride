const Element = require('./element');
const createId = require('../utils/create-id');

class Elements extends Map {
  /**
   *
   * @param {object} params
   * @param {string} params.gameId
   * @param {string[]} params.names
   */
  constructor({ gameId, names = [] } = {}) {
    if (!gameId) throw new Error('No game ID was provided to the Elements constructor.');
    super(names.sort().map((name) => {
      const element = new Element({ gameId, name });
      return [element.id, element];
    }));
  }

  get(idOrName) {
    return super.get(createId(idOrName));
  }

  has(idOrName) {
    return super.has(createId(idOrName));
  }
}

module.exports = Elements;
