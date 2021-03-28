const createId = require('../utils/create-id');

class Element {
  /**
   *
   * @param {object} params
   * @param {string} params.name
   */
  constructor({ name } = {}) {
    this.id = createId(name);
    this.name = name;
  }
}

module.exports = Element;
