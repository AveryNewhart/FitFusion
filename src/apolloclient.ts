import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

const httpLink = createHttpLink({
  uri: 'http://localhost:4042/graphql',
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});



// import { ApolloClient, InMemoryCache } from '@apollo/client/core'

// const cache = new InMemoryCache()

// const apolloClient = new ApolloClient({
//   cache,
//   uri: 'http://localhost:4042/graphql',
// })

// export default apolloClient