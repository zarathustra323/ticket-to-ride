const { gql } = require('apollo-server-express');
const interfaceDirectives = require('@parameter1/graphql-directive-interface-fields/directives');
const projectDirectives = require('@parameter1/graphql-directive-project/directives');
const pagination = require('@parameter1/graphql-mongodb-pagination/definitions');

const game = require('./game');
const user = require('./user');

module.exports = gql`

scalar Date
scalar ObjectID

${interfaceDirectives.typeDefs}
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

${game}
${user}

`;
