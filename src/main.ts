import { createApp, h } from 'vue'; // <-- imported h and provide for Apollo server
import { apolloClient } from './apolloclient';
import { createRouter, createWebHistory } from 'vue-router';
import { DefaultApolloClient } from '@vue/apollo-composable';
import './style.css'
import App from './App.vue';
import Home from './views/Home.vue';
import Profile from './views/Profile.vue';
import Login from './views/Login.vue';
import Feed from './views/Feed.vue';
import CalorieTracker from './views/CalorieTracker.vue'
import RunningRoutes from './views/RunningRoutes.vue';
import WorkoutCalender from './views/WorkoutCalender.vue';

const app = createApp({
  render: () => h(App),
})

app.use(createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/login', name: 'Login', component: Login },
    { path: '/feed', name: 'Feed', component: Feed },
    { path: '/calorietracker', name: 'CalorieTracker', component: CalorieTracker },
    { path: '/runningroutes', name: 'RunningRoutes', component: RunningRoutes },
    { path: '/workoutcalender', name: 'WorkoutCalender', component: WorkoutCalender },
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
