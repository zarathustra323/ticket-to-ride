import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { name, version } from '../../package.json';

const { VUE_APP_GRAPHQL_URL } = process.env;

const httpLink = createHttpLink({ uri: VUE_APP_GRAPHQL_URL });
const contextLink = setContext(() => {
  const authToken = localStorage.getItem('authToken');
  return { headers: { ...(authToken && { authorization: `Bearer ${authToken}` }) } };
});

export default new ApolloClient({
  name,
  version,
  cache: new InMemoryCache(),
  link: contextLink.concat(httpLink),
});
