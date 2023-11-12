<script setup lang="ts">

import Nav from './/Nav.vue';
import Goals from './Goals.vue';
import WorkoutCalender from './WorkoutCalender.vue';
import ProfilePicture from './ProfilePicture.vue';
import Followers from './Followers.vue';
import Following from './Following.vue';
import UsersPosts from './UsersPosts.vue';
import PersonalBests from './PersonalBests.vue';
import Bio from './Bio.vue';

</script>

<!-- SET UP FOR AN AREA FOR "SAVED ROUTES", MAYBE HAVE A MODAL POP UP TO SHOW THE USERS SAVED ROUTES, MAYBE EVEN JUST HAVE "SAVED ROUTES" BE A BUTTON UNDER THE USERS BIO THAT 
  ONCE CLICKS SHOWS A LIST OR OPENS A MODAL THAT DISPLAYS CLICKABLE LINKS THAT NAVIGATE TO /runningroutes AND DISPLAYS THAT ROUTE ON THE MAP(LOGIC TO BE DONE LATER) -->

<!-- SET UP AN AREA FOR SAVED WORKOUTS, MAYBE HAVE A MODAL POP UP OF THE USERS SAVED WORKOUTS. -->

<template>
 <div>
    <Nav />
 </div> 
  <div class="">
    <h1 class="text-center">Your FitFusion Profile</h1>
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
      <div class="bioDiv">
        <Bio />
      </div>
    </div>
    <div class="PrsAndGoals">
      <h3 class="text-center">GOALS AND PRS</h3>
      <div class="personalBestsDiv">
        <PersonalBests />
      </div>
      <div class="goalDiv">
        <Goals />
      </div>
    </div>
    <div class="usersPostsDiv">
      <UsersPosts />
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
.personalBestsDiv {
  border: 1px solid darkgoldenrod;
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

/* styling of the margin and border just for now, will change when fully styled into their own tabs that only appear once they are "clicked" on to become active */
.bioDiv {
  border: 1px solid rgb(212, 10, 195);
  margin-top: 10px;
  margin-bottom: 10px;
}

/* styling of the margin and border just for now, will change when fully styled into their own tabs that only appear once they are "clicked" on to become active */
.PrsAndGoals {
  border: 5px solid rgb(11, 87, 62);
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>