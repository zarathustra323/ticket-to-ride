import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { name, version } from '../../package.json';

const { VUE_APP_GRAPHQL_URL } = process.env;

export default new ApolloClient({
  name,
  version,
  cache: new InMemoryCache(),
  link: createHttpLink({ uri: VUE_APP_GRAPHQL_URL }),
});
