import { createRouter, createWebHistory } from 'vue-router';
import CalorieTracker from '../views/CalorieTracker.vue'
import Feed from '../views/Feed.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import RunningRoutes from '../views/RunningRoutes.vue'
import WorkoutCalender from '../views/WorkoutCalender.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/profile', 
    name: 'Profile', 
    component: Profile 
  },
  { 
    path: '/login', 
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
    component: WorkoutCalender 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;