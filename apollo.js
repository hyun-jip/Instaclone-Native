import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  uri: "https://nervous-dragonfly-52.loca.lt/graphql",
  cache: new InMemoryCache(),
});
export default client;
