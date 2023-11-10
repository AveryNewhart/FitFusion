<script setup lang="ts">

import Nav from './/Nav.vue';
import Goals from './Goals.vue';
import WorkoutCalender from './WorkoutCalender.vue';
import ProfilePicture from './ProfilePicture.vue';
import Followers from './Followers.vue';
import Following from './Following.vue';

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
    <div class="profilePictureDiv">
      <h3>this is where the users data will go/be called in. the users username next to the profile picture and such</h3>
      <ProfilePicture />
      <div class="followingDiv">
        <Following />
      </div>
      <div class="followerDiv">
        <Followers />
      </div>
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

.workoutCalenderDiv {
  border: 1px solid green;
  margin-top: 10px;
  margin-bottom: 10px;
}

.goalDiv {
  border: 1px solid purple;
  margin-top: 10px;
  margin-bottom: 10px;
}

.profilePictureDiv {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid red;
}

</style>