import { ApolloClient, InMemoryCache } from '@apollo/client';

// here we create the client that will be used to connect to the GraphQL API. This gets imported in the App.tsx

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

export default client;