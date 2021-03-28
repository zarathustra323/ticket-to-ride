const merge = require('lodash.merge');
const { connectionProjection } = require('@parameter1/graphql-directive-project/utils');

const classic = require('./classic');

module.exports = merge({
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
}, classic);
