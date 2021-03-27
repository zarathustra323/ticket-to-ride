const { gql } = require('apollo-server-express');

module.exports = gql`

extend type Mutation {
  "Creates a new game."
  createGame(input: CreateGameMutationInput!): Game!
    @auth
}

enum PlayerColorEnum {
  BLACK
  BLUE
  GREEN
  RED
  YELLOW
}

enum RouteColorEnum {
  ANY
  BLACK
  BLUE
  GREEN
  ORANGE
  PINK
  RED
  WHITE
  YELLOW
}

type Game {
  id: ObjectID! @project(field: "_id")
  name: String @project
  players: [Player!] @project
  createdAt: Date! @project
  updatedAt: Date! @project
}

type Player {
  id: ObjectID! @project(field: "_id")
  name: String!
  color: PlayerColorEnum!
}

input AddGamePlayerMutationInput {
  name: String!
  color: PlayerColorEnum!
}

input CreateGameMutationInput {
  name: String
  players: [AddGamePlayerMutationInput!] = []
}

`;
