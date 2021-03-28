const { gql } = require('apollo-server-express');

module.exports = gql`

type ClassicGame implements GameInterface @interfaceFields {
  destinations: [ClassicGameDestination!]!
  playerColors: [ClassicGamePlayerColor!]!
  routeColors: [ClassicGameRouteColor!]!
}

enum ClassicGamePlayerColorEnum {
  BLACK
  BLUE
  GREEN
  RED
  YELLOW
}

enum ClassicGameRouteColorEnum {
  BLACK
  BLUE
  GREEN
  ORANGE
  PINK
  RED
  WHITE
  YELLOW
}

enum ClassicGameDestinationEnum {
  ATLANTA
  BOSTON
  CALGARY
  CHARLESTON
  CHICAGO
  DALLAS
  DENVER
  DULUTH
  EL_PASO
  HELENA
  HOUSTON
  KANSAS_CITY
  LAS_VEGAS
  LITTLE_ROCK
  LOS_ANGELES
  MIAMI
  MONTREAL
  NASHVILLE
  NEW_ORLEANS
  NEW_YORK
  OKLAHOMA_CITY
  OMAHA
  PHOENIX
  PITTSBURGH
  PORTLAND
  RALEIGH
  SAINT_LOUIS
  SALT_LAKE_CITY
  SAN_FRANCISCO
  SANTA_FE
  SAULT_ST_MARIE
  SEATTLE
  TORONTO
  VANCOUVER
  WASHINGTON
  WINNIPEG
}

type ClassicGameRouteColor {
  id: ClassicGameRouteColorEnum!
  name: String!
}

type ClassicGamePlayerColor {
  id: ClassicGamePlayerColorEnum!
  name: String!
}

type ClassicGameDestination {
  "The unique destination identifier."
  id: ClassicGameDestinationEnum!
  "The destination name."
  name: String!
  "Destinations that connect to this one."
  destinations: [ClassicGameDestination!]!
}

`;
