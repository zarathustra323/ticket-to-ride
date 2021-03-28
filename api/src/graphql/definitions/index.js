const { gql } = require('apollo-server-express');
const projectDirectives = require('@parameter1/graphql-directive-project/directives');
const pagination = require('@parameter1/graphql-mongodb-pagination/definitions');

const colors = require('./colors');
const destinations = require('./destinations');
const game = require('./game');
const user = require('./user');

module.exports = gql`

scalar Date
scalar ObjectID

${projectDirectives.typeDefs}
directive @auth on FIELD_DEFINITION

${pagination}

type Query {
  "A generic ping/pong test query."
  ping: String!
}

type Mutation {
  "A generic ping/pong test mutation."
  ping: String!
}

${colors}
${destinations}
${game}
${user}

`;
