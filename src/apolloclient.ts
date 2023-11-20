import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core';

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4042/graphql'
});

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache'
    }
  }
});


// import { ApolloClient, InMemoryCache } from '@apollo/client/core'

// const cache = new InMemoryCache()

// const apolloClient = new ApolloClient({
//   cache,
//   uri: 'http://localhost:4042/graphql',
// })

// export default apolloClient