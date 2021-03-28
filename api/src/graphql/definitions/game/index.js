const { gql } = require('apollo-server-express');

const classic = require('./classic');

module.exports = gql`

extend type Query {
  "Finds a single game type."
  game(input: GameQueryInput!): GameInterface!
  "Finds all available game types."
  games: [GameInterface!]!
}

enum GameTypeEnum {
  CLASSIC
}

interface GameInterface {
  "The internal game type."
  id: GameTypeEnum!
  "The game type name."
  name: String!
}

input GameQueryInput {
  "The game ID to query for."
  id: GameTypeEnum!
}

${classic}

`;
