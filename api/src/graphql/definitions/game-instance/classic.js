const { gql } = require('apollo-server-express');

module.exports = gql`

extend type Mutation {
  "Creates a new classic game instance."
  newClassicGame(input: NewClassicGameMutationInput!): ClassicGameInstance!
    @auth
}

type ClassicGameInstance implements GameInstanceInterface @interfaceFields {
  "The players of the game."
  players: [ClassicGamePlayer!] @project
}

type ClassicGamePlayer {
  "The unique player identifier."
  id: ObjectID! @project(field: "_id")
  "The player's name."
  name: String!
  "The player's color."
  color: ClassicGamePlayerColor!
}

input AddClassicGamePlayerMutationInput {
  name: String!
  color: ClassicGamePlayerColorEnum!
}

input NewClassicGameMutationInput {
  players: [AddClassicGamePlayerMutationInput!] = []
}

`;
