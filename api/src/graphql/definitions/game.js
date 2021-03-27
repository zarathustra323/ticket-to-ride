const { gql } = require('apollo-server-express');

module.exports = gql`

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
  id: ObjectID!
  name: String
  players: [Player!]!
  createdAt: Date!
}

type Player {
  id: ObjectID!
  name: String!
  color: PlayerColorEnum!
}

`;
