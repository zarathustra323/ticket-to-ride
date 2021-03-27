const { ObjectId } = require('@parameter1/mongodb');
const GraphQLObjectID = require('@parameter1/graphql-type-objectid');
const GraphQLDate = require('@parameter1/graphql-type-date');
const merge = require('lodash.merge');

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
}, user);
