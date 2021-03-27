const { gql } = require('apollo-server-express');

const game = require('./game');

module.exports = gql`

scalar Date
scalar ObjectID

type Query {
  "A generic ping/pong test query."
  ping: String!
}

type Mutation {
  "A generic ping/pong test mutation."
  ping: String!
}

${game}

`;
