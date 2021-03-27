const { ObjectId } = require('@parameter1/mongodb');
const GraphQLObjectID = require('@parameter1/graphql-type-objectid');
const GraphQLDate = require('@parameter1/graphql-type-date');
const merge = require('lodash.merge');
const pagination = require('@parameter1/graphql-mongodb-pagination/resolvers');

const game = require('./game');
const user = require('./user');

module.exports = merge({
  Date: GraphQLDate,
  ObjectID: GraphQLObjectID(ObjectId),

  /**
   *
   */
  PlayerColorEnum: {
    BLACK: 'Black',
    BLUE: 'Blue',
    GREEN: 'Green',
    RED: 'Red',
    YELLOW: 'Yellow',
  },

  /**
   *
   */
  RouteColorEnum: {
    ANY: 'Any',
    BLACK: 'Black',
    BLUE: 'Blue',
    GREEN: 'Green',
    ORANGE: 'Orange',
    PINK: 'Pink',
    RED: 'Red',
    WHITE: 'White',
    YELLOW: 'Yellow',
  },

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
}, pagination, game, user);
