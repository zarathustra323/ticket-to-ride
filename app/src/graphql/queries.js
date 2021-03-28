import gql from 'graphql-tag';

export const GAMES = gql`
  query Games {
    games {
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
