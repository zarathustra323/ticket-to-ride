const { gql } = require('apollo-server-express');

module.exports = gql`

extend type Query {
  "Finds all game instances for the currently logged-in user. The result is paginated."
  myGameInstances(input: MyGameInstancesQueryInput = {}): GameInstanceConnection!
    @auth
}

extend type Mutation {
  "Creates a new classic game instance."
  newClassicGame(input: NewClassicGameMutationInput!): ClassicGameInstance!
    @auth
}

enum GameInstanceSortFieldEnum {
  ID
  UPDATED_AT
}

interface GameInstanceInterface {
  "The unique game identifier."
  id: ObjectID! @project(field: "_id")
  "The game information."
  game: Game! @project(field: "_type")
  "When the game was created, as a timestamp in milliseconds."
  createdAt: Date! @project
  "When the game was last updated, as a timestamp in milliseconds."
  updatedAt: Date! @project
}

type ClassicGameInstance implements GameInstanceInterface @interfaceFields {
  "The players of the game."
  players: [ClassicGamePlayer!] @project
}

type GameInstanceConnection @projectUsing(type: "GameInstanceInterface") {
  "The total number of records found in the query."
  totalCount: Int!
  "An array of edge objects containing the record and the cursor."
  edges: [GameInstanceEdge]!
  "Contains the pagination info for this query."
  pageInfo: PageInfo!
}

type GameInstanceInterface {
  "The edge result node."
  node: GameInstance!
  "The opaque cursor value for this record edge."
  cursor: String!
}

type ClassicGamePlayer {
  "The unique player identifier."
  id: ObjectID! @project(field: "_id")
  "The player's name."
  name: String!
  "The player's color."
  color: ClassicPlayerColorEnum!
}

input AddClassicGamePlayerMutationInput {
  name: String!
  color: ClassicPlayerColorEnum!
}

input GameInstanceSortInput {
  "The field to sort by."
  field: GameInstanceSortFieldEnum
  "The sort order, either \`DESC\` or \`ASC\`"
  order: SortOrderEnum
}

input MyGameInstancesQueryInput {
  "Sets sorting criteria for the query."
  sort: GameInstanceSortInput
  "Sets pagination (limit/after) criteria for the query."
  pagination: PaginationInput = {}
}

input NewClassicGameMutationInput {
  players: [AddClassicGamePlayerMutationInput!] = []
}

`;
