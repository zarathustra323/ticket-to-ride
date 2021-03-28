const merge = require('lodash.merge');
const createError = require('http-errors');

module.exports = merge({
  /**
   *
   */
  GameCity: {
    /**
     *
     */
    destinations({ gameId, id }, _, { gameData }) {
      return gameData.get(gameId).getDesintationsFor(id);
    },
  },

  /**
   *
   */
  GameColors: {
    /**
     *
     */
    player(game) {
      return game.playerColors.values();
    },

    /**
     *
     */
    route(game) {
      return game.routeColors.values();
    },
  },

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

    /**
     *
     */
    cities(game) {
      return game.cities.values();
    },

    /**
     *
     */
    colors(game) {
      return game;
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
});
