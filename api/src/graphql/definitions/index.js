const { gql } = require('apollo-server-express');
const projectDirectives = require('@parameter1/graphql-directive-project/directives');

const game = require('./game');

module.exports = gql`

scalar Date
scalar ObjectID

${projectDirectives.typeDefs}
directive @auth on FIELD_DEFINITION

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
