const { connectionProjection } = require('@parameter1/graphql-directive-project/utils');

module.exports = {
  /**
   *
   */
  Game: {
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
    createGame(_, { input }, { repos, auth }) {
      const userId = auth.getUserId();
      const { name, players } = input;
      return repos.game.create({ userId, name, players });
    },
  },

  /**
   *
   */
  Query: {
    /**
     *
     */
    myGames(_, { input }, { repos, auth }, info) {
      const userId = auth.getUserId();
      const { sort, pagination } = input;
      const options = {
        sort,
        projection: connectionProjection(info),
        ...pagination,
      };
      return repos.game.paginateForUser({ userId, options });
    },
  },
};
