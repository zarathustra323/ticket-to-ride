import gql from 'graphql-tag';

export const GAMES = gql`
  query Games {
    games {
      id
      name
    }
  }
`;

export const USER_GAME_INSTANCES = gql`
  query UserGameInstances {
    myGameInstances {
      totalCount
      edges {
        node {
          id
          game {
            id
            name
          }
          players {
            id
            name
            color {
              id
              name
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const PING = gql`
  query Ping {
    ping
  }
`;
