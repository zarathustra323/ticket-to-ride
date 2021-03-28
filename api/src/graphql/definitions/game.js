const { gql } = require('apollo-server-express');

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
  "The game colors."
  colors: GameColors!
  "The game citites."
  cities: [GameCity!]!
}

type ClassicGame implements GameInterface @interfaceFields {
  id: GameTypeEnum!
}

type GameColors {
  "The available player colors."
  player: [GameColor!]!
  "The available route colors."
  route: [GameColor!]!
}

type GameCity {
  "The unique city identifier."
  id: String!
  "The city name."
  name: String!
  "Destinations from this city."
  destinations: [GameCity!]!
}

type GameColor {
  "The unique color identifier."
  id: String!
  "The color name."
  name: String!
}

input GameQueryInput {
  "The game ID to query for."
  id: GameTypeEnum!
}

`;
