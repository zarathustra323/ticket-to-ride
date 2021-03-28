const createId = require('./create-id');

module.exports = (tuple) => tuple.slice(0, 2).map(createId).sort().join('.');
