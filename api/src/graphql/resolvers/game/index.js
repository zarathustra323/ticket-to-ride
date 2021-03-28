const merge = require('lodash.merge');
const createError = require('http-errors');

const classic = require('./classic');

module.exports = merge({
  /**
   *
   */
  GameInterface: {
    /**
     *
     */
    __resolveType({ id }) {
      if (id === 'CLASSIC') return 'ClassicGame';
      return null;
    },
  },

  /**
   *
   */
  Query: {
    /**
     *
     */
    game(_, { input }, { gameData }) {
      const { id } = input;
      const game = gameData.get(id);
      if (!game) throw createError(404, `No game found for ID '${id}'`);
      return game;
    },

    /**
     *
     */
    games(_, __, { gameData }) {
      return gameData.values();
    },
  },
}, classic);
