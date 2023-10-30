import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import './style.css'
import App from './App.vue';
import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Login from './components/Login.vue';
import Feed from './components/Feed.vue';
import CalorieTracker from './components/CalorieTracker.vue'
import RunningRoutes from './components/RunningRoutes.vue';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://rickandmortyapi.com/graphql', // Update with your GraphQL API URL
});

const app = createApp(App);

app.use(createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/login', name: 'Login', component: Login },
    { path: '/feed', name: 'Feed', component: Feed },
    { path: '/calorietracker', name: 'CalorieTracker', component: CalorieTracker },
    { path: '/runningroutes', name: 'RunningRoutes', component: RunningRoutes },
  ],
}));

app.provide(DefaultApolloClient, apolloClient);
app.mount('#app');


// import { createApp, provide, h } from 'vue'
// import { DefaultApolloClient } from '@vue/apollo-composable'
// import { ApolloClient, InMemoryCache } from '@apollo/client/core'
// import './style.css'
// import App from './App.vue'

// const cache = new InMemoryCache()

// const apolloClient = new ApolloClient({
//   cache,
//   uri: '<https://rickandmortyapi.com/graphql>',
// })

// const app = createApp({
//     setup () {
//       provide(DefaultApolloClient, apolloClient)
//     },
  
//     render: () => h(App),
//   })

//   app.mount('#app');
