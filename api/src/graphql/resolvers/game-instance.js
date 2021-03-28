const { connectionProjection } = require('@parameter1/graphql-directive-project/utils');

module.exports = {
  /**
   *
   */
  GameInstanceInterface: {
    /**
     *
     */
    __resolveType({ _type }) {
      if (_type === 'CLASSIC') return 'ClassicGameInstance';
      return null;
    },

    /**
     *
     */
    game({ _type }, _, { gameData }) {
      return gameData.get(_type);
    },

    /**
     *
     */
    players({ _type, players }) {
      if (!Array.isArray(players)) return [];
      return players.map((player) => ({ ...player, _type }));
    },
  },

  /**
   *
   */
  GameInstanceSortFieldEnum: {
    ID: '_id',
    UPDATED_AT: 'updatedAt',
  },

  /**
   *
   */
  GamePlayer: {
    /**
     *
     */
    color({ _type, colorId }, _, { gameData }) {
      return gameData.get(_type).playerColors.get(colorId);
    },
  },

  /**
   *
   */
  Mutation: {
    /**
     *
     */
    createNewGame(_, { input }, { repos, auth }) {
      const userId = auth.getUserId();
      const { type, players } = input;
      return repos.game.create({ type, userId, players });
    },
  },

  /**
   *
   */
  Query: {
    /**
     *
     */
    myGameInstances(_, { input }, { repos, auth }, info) {
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
