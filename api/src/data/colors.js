const createId = require('./utils/create-id');

module.exports = {
  player: [
    'Black',
    'Blue',
    'Green',
    'Red',
    'Yellow',
  ].reduce((map, color) => {
    const id = createId(color);
    map.set(id, { id, name: color });
    return map;
  }, new Map()),
  ticket: [
    'Black',
    'Blue',
    'Green',
    'Orange',
    'Pink',
    'Red',
    'White',
    'Yellow',
  ].reduce((map, color) => {
    const id = createId(color);
    map.set(id, { id, name: color });
    return map;
  }, new Map()),
};
