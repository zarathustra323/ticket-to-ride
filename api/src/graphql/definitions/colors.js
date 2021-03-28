const { gql } = require('apollo-server-express');

module.exports = gql`

extend type Query {
  classicPlayerColors: [ClassicPlayerColor!]!
}

enum ClassicPlayerColorEnum {
  BLACK
  BLUE
  GREEN
  RED
  YELLOW
}

enum ClassicRouteColorEnum {
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

type ClassicPlayerColor {
  id: ClassicPlayerColorEnum!
  name: String!
}

`;
