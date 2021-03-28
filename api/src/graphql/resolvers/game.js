const { connectionProjection } = require('@parameter1/graphql-directive-project/utils');

module.exports = {
  /**
   *
   */
  GameInterface: {
    /**
     *
     */
    __resolveType(doc) {
      if (doc._type === 'CLASSIC') return 'ClassicGame';
      return null;
    },
  },

  /**
   *
   */
  ClassicGame: {
    /**
     *
     */
    players({ players }) {
      return Array.isArray(players) ? players : [];
    },
  },

  /**
   *
   */
  GameSortFieldEnum: {
    ID: '_id',
    UPDATED_AT: 'updatedAt',
  },

  /**
   *
   */
  Mutation: {
    newClassicGame(_, { input }, { repos, auth }) {
      const userId = auth.getUserId();
      const { players } = input;
      return repos.game.create({ type: 'CLASSIC', userId, players });
    },
  },

  /**
   *
   */
  Query: {
    /**
     *
     */
    gameTypes(_, __, { gameData }) {
      return Object.keys(gameData).map((key) => gameData[key]);
    },

    /**
     *
     */
    myGames(_, { input }, { repos, auth }, info) {
      const userId = auth.getUserId();
      const { sort, pagination } = input;
      const options = {
        sort,
        projection: {
          ...connectionProjection(info),
          _type: 1, // @todo the project directive should have an option to always include fields
        },
        ...pagination,
      };
      return repos.game.paginateForUser({ userId, options });
    },
  },
};
