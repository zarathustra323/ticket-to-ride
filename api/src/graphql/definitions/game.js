const { gql } = require('apollo-server-express');

module.exports = gql`

extend type Query {
  "Finds all games for the currently logged-in user. The result is paginated."
  myGames(input: MyGamesQueryInput = {}): GameConnection!
    @auth
}

extend type Mutation {
  "Creates a new game."
  createGame(input: CreateGameMutationInput!): Game!
    @auth
}

enum GameSortFieldEnum {
  ID
  UPDATED_AT
}

type Game {
  "The "
  id: ObjectID! @project(field: "_id")
  name: String @project
  players: [GamePlayer!] @project
  createdAt: Date! @project
  updatedAt: Date! @project
}

type GameConnection @projectUsing(type: "Game") {
  "The total number of records found in the query."
  totalCount: Int!
  "An array of edge objects containing the record and the cursor."
  edges: [GameEdge]!
  "Contains the pagination info for this query."
  pageInfo: PageInfo!
}

type GameEdge {
  "The edge result node."
  node: Game!
  "The opaque cursor value for this record edge."
  cursor: String!
}

type GamePlayer {
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

input GameSortInput {
  "The field to sort by."
  field: GameSortFieldEnum
  "The sort order, either \`DESC\` or \`ASC\`"
  order: SortOrderEnum
}

input MyGamesQueryInput {
  "Sets sorting criteria for the query."
  sort: GameSortInput
  "Sets pagination (limit/after) criteria for the query."
  pagination: PaginationInput = {}
}

`;
