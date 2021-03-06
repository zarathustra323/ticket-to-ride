const { ObjectId } = require('@parameter1/mongodb');
const GraphQLObjectID = require('@parameter1/graphql-type-objectid');
const GraphQLDate = require('@parameter1/graphql-type-date');
const merge = require('lodash.merge');
const pagination = require('@parameter1/graphql-mongodb-pagination/resolvers');

const game = require('./game');
const gameInstance = require('./game-instance');
const user = require('./user');

module.exports = merge({
  Date: GraphQLDate,
  ObjectID: GraphQLObjectID(ObjectId),

  /**
   *
   */
  Mutation: {
    /**
     *
     */
    ping() {
      return 'pong';
    },
  },

  /**
   *
   */
  Query: {
    /**
     *
     */
    ping() {
      return 'pong';
    },
  },
}, pagination, game, gameInstance, user);
