import gql from 'graphql-tag';

export default gql`

extend type Query {
  isLoggedIn: Boolean!
}

`;
