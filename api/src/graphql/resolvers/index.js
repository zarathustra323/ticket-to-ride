const { ObjectId } = require('@parameter1/mongodb');
const GraphQLObjectID = require('@parameter1/graphql-type-objectid');
const GraphQLDate = require('@parameter1/graphql-type-date');
const merge = require('lodash.merge');
const pagination = require('@parameter1/graphql-mongodb-pagination/resolvers');

const colors = require('./colors');
const game = require('./game');
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
}, pagination, colors, game, user);
