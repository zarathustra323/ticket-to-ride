import gql from 'graphql-tag';

export const GAME_TYPES = gql`
  query GameTypes {
    gameTypes {
      id
      name
    }
  }
`;

export const PING = gql`
  query Ping {
    ping
  }
`;
