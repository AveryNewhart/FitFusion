<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent
  // , provide 
} from 'vue';
// import { ApolloClient, InMemoryCache,
//   //  createHttpLink 
//   } from '@apollo/client/core';
// import { setContext } from '@apollo/client/link/context';

// import { DefaultApolloClient } from '@vue/apollo-composable';



// Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const apolloClient = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });


export default defineComponent({
  setup() {
    // Provide the Apollo Client using DefaultApolloClient
    // provide(DefaultApolloClient, 
    // // apolloClient
    // );

  },
});
</script>



