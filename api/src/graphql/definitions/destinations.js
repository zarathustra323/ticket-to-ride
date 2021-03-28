const { gql } = require('apollo-server-express');

module.exports = gql`

extend type Query {
  classicDestinations: [ClassicDestination!]!
}

enum ClassicDestinationEnum {
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

type ClassicDestination {
  "The unique destination identifier."
  id: ClassicDestinationEnum!
  "The destination name."
  name: String!
  "Destinations that connect to this one."
  destinations: [ClassicDestination!]!
}

`;
