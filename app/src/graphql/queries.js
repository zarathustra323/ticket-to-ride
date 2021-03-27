import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const PING = gql`
  query Ping {
    ping
  }
`;
