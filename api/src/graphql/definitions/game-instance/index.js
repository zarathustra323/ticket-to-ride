const { gql } = require('apollo-server-express');

const classic = require('./classic');

module.exports = gql`

extend type Query {
  "Finds all game instances for the currently logged-in user. The result is paginated."
  myGameInstances(input: MyGameInstancesQueryInput = {}): GameInstanceConnection!
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
  game: GameInterface! @project(field: "_type")
  "When the game was created, as a timestamp in milliseconds."
  createdAt: Date! @project
  "When the game was last updated, as a timestamp in milliseconds."
  updatedAt: Date! @project
}

type GameInstanceConnection @projectUsing(type: "GameInstanceInterface") {
  "The total number of records found in the query."
  totalCount: Int!
  "An array of edge objects containing the record and the cursor."
  edges: [GameInstanceEdge]!
  "Contains the pagination info for this query."
  pageInfo: PageInfo!
}

type GameInstanceEdge {
  "The edge result node."
  node: GameInstanceInterface!
  "The opaque cursor value for this record edge."
  cursor: String!
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

${classic}

`;
