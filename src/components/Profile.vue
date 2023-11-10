<script setup lang="ts">

import Nav from './/Nav.vue';
import Goals from './Goals.vue';
import WorkoutCalender from './WorkoutCalender.vue';
import ProfilePicture from './ProfilePicture.vue';
import Followers from './Followers.vue';
import Following from './Following.vue';
import usersPosts from './usersPosts.vue';

</script>

<!-- PUT PROFILE PICTURE TO THE TOP OF THE PAGE -->
<!-- SET UP FOR AN AREA FOR "SAVED ROUTES", MAYBE HAVE A MODAL POP UP TO SHOW THE USERS SAVED ROUTES -->
<!-- SET UP AN AREA FOR SAVED WORKOUTS, MAYBE HAVE A MODAL POP UP OF THE USERS SAVED WORKOUTS -->
<!-- CREATE A "PERSONAL BEST SECTION". THE USER CAN PUT THEIR BEST RUNS< WORKOUTS, etc. -->
<!-- ONCE CREATING A PROFILE IS SET-UP, HAVE THE USER WHO IS LOGGED IN(username) BE NEXT TO THE PROFILE PICTURE, JUST LIKE HOW IT WOULD BE ON ANY OTHER SOCIAL MEDIA APP -->

<template>
 <div>
    <Nav />
 </div> 
  <div class="">
    <h1>profile</h1>
    <div class="mainProfileDiv">
      <h2>this is where the users data will go/be called in. the users username next to the profile picture and such</h2>
      <h2>Username HERE</h2>
      <ProfilePicture />
      <div class="followingDiv">
        <Following />
      </div>
      <div class="followerDiv">
        <Followers />
      </div>
    </div>
    <div class="usersPostsDiv">
      <usersPosts />
    </div>
    <div class="goalDiv">
      <Goals />
    </div>
    <div class="workoutCalenderDiv">
      <WorkoutCalender />
    </div>
  </div>

</template>

<style scoped>

/* styling of the margin and border just for now, will change when fully styled into their own tabs that only appear once they are "clicked" on to become active */
.workoutCalenderDiv {
  border: 1px solid green;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* styling of the margin and border just for now, will change when fully styled into their own tabs that only appear once they are "clicked" on to become active */
.goalDiv {
  border: 1px solid purple;
  margin-top: 10px;
  margin-bottom: 10px;
}

/* styling of the margin and border just for now, will change when fully styled into their own tabs that only appear once they are "clicked" on to become active */
.mainProfileDiv {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid red;
}

/* styling of the margin and border just for now, will change when fully styled into their own tabs that only appear once they are "clicked" on to become active */
.usersPostsDiv {
  border: 1px solid darkblue;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>