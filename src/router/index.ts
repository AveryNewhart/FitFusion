import { createRouter, createWebHistory } from 'vue-router';
import CalorieTracker from '../views/CalorieTracker.vue'
import Feed from '../views/Feed.vue'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import RunningRoutes from '../views/RunningRoutes.vue'
import WorkoutCalendar from '../views/WorkoutCalendar.vue'

const routes = [
  // { 
  //   path: '/', 
  //   name: 'Home', 
  //   component: Home 
  // },
  { 
    path: '/profile', 
    name: 'Profile', 
    component: Profile 
  },
  { 
    path: '/', 
    name: 'Login', 
    component: Login 
  },
  { 
    path: '/feed', 
    name: 'Feed', 
    component: Feed 
  },
  { 
    path: '/calorietracker', 
    name: 'CalorieTracker', 
    component: CalorieTracker 
  },
  { 
    path: '/runningroutes', 
    name: 'RunningRoutes', 
    component: RunningRoutes 
  },
  { 
    path: '/workoutcalender', 
    name: 'WorkoutCalender', 
    component: WorkoutCalendar 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;