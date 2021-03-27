const TOKEN_KEY = 'auth-token';

const get = () => localStorage.getItem(TOKEN_KEY);

export default {
  get,
  exists: () => Boolean(get()),
  remove: () => localStorage.removeItem(TOKEN_KEY),
  set: (value) => {
    if (!value) throw new Error('Unable to set auth token: no value was provided.');
    return localStorage.setItem(TOKEN_KEY, value);
  },
  TOKEN_KEY,
};
