const { gql } = require('apollo-server-express');

module.exports = gql`

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

`;
