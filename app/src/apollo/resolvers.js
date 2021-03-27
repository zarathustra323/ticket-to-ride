import tokenStorage from '../services/token-storage';

export default {
  Query: {
    isLoggedIn: () => tokenStorage.exists(),
  },
};
