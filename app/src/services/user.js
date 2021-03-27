import gql from 'graphql-tag';
import apollo from '../apollo/client';
import tokenStorage from './token-storage';

const { TOKEN_KEY } = tokenStorage;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client(always: true)
  }
`;

const LOGOUT = gql`
  mutation Logout {
    logoutUser
  }
`;

const clearTokensAndReload = () => {
  tokenStorage.remove();
  apollo.clearStore();
  window.location.href = '/';
};

export default {
  clearTokensAndReload,

  /**
   *
   */
  attachStorageListener: () => {
    window.addEventListener('storage', (event) => {
      const { key, newValue } = event;
      // if key is null, all of local storage was cleared. log user out.
      if (key === null) clearTokensAndReload();
      // only act on the token key...
      if (key === TOKEN_KEY) {
        // if a new value is set, reload. this effectively logs the user in.
        if (newValue) {
          window.location.href = '/';
        } else {
          // otherwise clear tokens and reload.
          clearTokensAndReload();
        }
      }
    });
  },

  /**
   *
   */
  isLoggedIn: async () => {
    const { data } = await apollo.query({ query: IS_LOGGED_IN });
    return data.isLoggedIn;
  },

  /**
   *
   */
  logout: async () => {
    try {
      await apollo.mutate({ mutation: LOGOUT });
    } catch (e) {
      // @todo how should this be handled??
    } finally {
      // always clear tokens, even on error
      clearTokensAndReload();
    }
  },
};
