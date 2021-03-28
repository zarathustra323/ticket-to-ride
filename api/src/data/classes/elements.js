const Element = require('./element');
const createId = require('../utils/create-id');

class Elements extends Map {
  /**
   *
   * @param {string[]} names
   */
  constructor(names = []) {
    super(names.sort().map((name) => {
      const element = new Element({ name });
      return [element.id, element];
    }));
  }

  hasName(name) {
    const id = createId(name);
    return this.has(id);
  }

  getByName(name) {
    const id = createId(name);
    return this.get(id);
  }
}

module.exports = Elements;
