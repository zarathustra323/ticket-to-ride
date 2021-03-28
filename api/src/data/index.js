const ClassicGame = require('./classic');

module.exports = new Map([
  new ClassicGame(),
].map((game) => [game.id, game]));
