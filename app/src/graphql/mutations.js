import gql from 'graphql-tag';

export const REGISTER_USER = gql`
  mutation RegisterUser($input: RegisterUserMutationInput!) {
    registerUser(input: $input) {
      id
      email
    }
  }
`;

export const LOGIN_USER_FROM_LINK = gql`
  mutation LoginUserFromLink($input: LoginUserFromLinkMutationInput!) {
    loginUserFromLink(input: $input) {
      authToken
    }
  }
`;

export const SEND_USER_LOGIN_LINK = gql`
  mutation SendUserLoginLink($input: SendUserLoginLinkMutationInput!) {
    sendUserLoginLink(input: $input)
  }
`;
