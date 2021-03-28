const { gql } = require('apollo-server-express');

const classic = require('./classic');

module.exports = gql`

extend type Query {
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

${classic}

`;
