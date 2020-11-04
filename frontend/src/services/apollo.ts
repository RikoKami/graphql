import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http/lib/index";

const httpLink = createHttpLink({
  uri: process.env.API_ENDPOINT + "/graphql/",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: httpLink,
});

export default client