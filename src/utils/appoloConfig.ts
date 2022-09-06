import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://wpe-hiring.tokopedia.net/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "Access-Control-Allow-Origin": "https://www.tokopedia.com",
      //   "Access-Control-Allow-Credentials": true,
      //   "Timing-Allow-Origin": "https://log.tokopedia.net",
      //   "X-Frame-Options": "SAMEORIGIN",
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
