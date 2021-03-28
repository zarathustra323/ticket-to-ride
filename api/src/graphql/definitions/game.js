const { gql } = require('apollo-server-express');

module.exports = gql`

extend type Query {
  "Finds all available game types."
  gameTypes: [GameType!]!
  "Finds all games for the currently logged-in user. The result is paginated."
  myGames(input: MyGamesQueryInput = {}): GameConnection!
    @auth
}

extend type Mutation {
  "Creates a new classic game."
  newClassicGame(input: NewClassicGameMutationInput!): ClassicGame!
    @auth
}

enum GameTypeEnum {
  CLASSIC
}

enum GameSortFieldEnum {
  ID
  UPDATED_AT
}

interface GameInterface {
  "The unique game identifier."
  id: ObjectID! @project(field: "_id")
  "The game type."
  type: GameTypeEnum! @project(field: "_type")
  "When the game was created, as a timestamp in milliseconds."
  createdAt: Date! @project
  "When the game was last updated, as a timestamp in milliseconds."
  updatedAt: Date! @project
}

interface GamePlayerInterface {
  "The unique player identifier."
  id: ObjectID! @project(field: "_id")
  "The player's name."
  name: String!
}

type GameType {
  "The internal game type."
  id: GameTypeEnum!
  "The game type name"
  name: String!
}

type ClassicGame implements GameInterface @interfaceFields {
  "The players of the game."
  players: [ClassicGamePlayer!] @project
}

type GameConnection @projectUsing(type: "GameInterface") {
  "The total number of records found in the query."
  totalCount: Int!
  "An array of edge objects containing the record and the cursor."
  edges: [GameEdge]!
  "Contains the pagination info for this query."
  pageInfo: PageInfo!
}

type GameEdge {
  "The edge result node."
  node: GameInterface!
  "The opaque cursor value for this record edge."
  cursor: String!
}

type ClassicGamePlayer implements GamePlayerInterface @interfaceFields {
  "The player's color."
  color: ClassicPlayerColorEnum!
}

input AddClassicGamePlayerMutationInput {
  name: String!
  color: ClassicPlayerColorEnum!
}

input NewClassicGameMutationInput {
  players: [AddClassicGamePlayerMutationInput!] = []
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
