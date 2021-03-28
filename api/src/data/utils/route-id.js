const createId = require('./create-id');

module.exports = (cities, color) => {
  const elements = [...cities.slice(0, 2).sort(), color || 'ANY'];
  return elements.map(createId).join('.');
};
