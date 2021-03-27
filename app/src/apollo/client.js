import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { get } from 'object-path';
import tokenStorage from '../services/token-storage';
import { name, version } from '../../package.json';
import typeDefs from './type-defs';
import resolvers from './resolvers';

const { isArray } = Array;
const cache = new InMemoryCache();

const { VUE_APP_GRAPHQL_URL } = process.env;

const initialData = {};
cache.writeData({ data: initialData });

const client = new ApolloClient({
  name,
  version,
  cache,
  link: ApolloLink.from([
    onError(({ graphQLErrors: errors }) => {
      if (isArray(errors) && errors.some((error) => get(error, 'extensions.code') === 'UNAUTHORIZED')) {
        // Delete the token and reload the app (to clear all possible cache).
        tokenStorage.remove();
        window.location.href = '/';
      }
    }),
    setContext(() => {
      const headers = {};
      const token = tokenStorage.get();
      if (token) headers.authorization = `Bearer ${token}`;
      return { headers };
    }),
    createHttpLink({ uri: VUE_APP_GRAPHQL_URL }),
  ]),
  typeDefs,
  resolvers,
});

client.onResetStore(() => cache.writeData({ data: initialData }));

export default client;
