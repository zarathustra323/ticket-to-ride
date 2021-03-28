const merge = require('lodash.merge');

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
    games(_, __, { gameData }) {
      return gameData.values();
    },
  },
}, classic);
