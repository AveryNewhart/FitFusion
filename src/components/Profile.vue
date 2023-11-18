<script setup lang="ts">

import Nav from './/Nav.vue';
import Goals from './Goals.vue';
import ProfilePicture from './ProfilePicture.vue';
import Followers from './Followers.vue';
import Following from './Following.vue';
import UsersPosts from './UsersPosts.vue';
import PersonalBests from './PersonalBests.vue';
import Bio from './Bio.vue';
import UsersRoutes from './UsersRoutes.vue';

</script>

<!-- SET UP AN AREA FOR FAVORITE WORKOUTS AND FOR EACH CATEGORY -->
<!-- HAVE SET UP LIKE UserRoutes.vue file! -->
<!-- MAKE A NEW COMPONENT FOR IT. -->

<template>
 <div>
    <Nav />
 </div> 
  <div class="profileBackground">
    <h1 class="text-center mainH1OfProf">Your FitFusion Profile</h1>
    <div class="mainProfileDiv">
      <h2 class="usernameText">Username HERE</h2>
      <ProfilePicture />
      <div class="followingDiv">
        <Following />
      </div>
      <div class="followerDiv">
        <Followers />
      </div>
      <div class="usersRoutesDiv">
        <UsersRoutes />
      </div>
      <div class="bioDiv">
        <Bio />
      </div>
    </div>
    <div class="PrsAndGoals">
      <h3 class="text-center goalsHead">GOALS AND PRS</h3>
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
  </div>

</template>

<style scoped>

.profileBackground {
  /* background-color: #4E515C; */
  background-color: #2d2d2d;
}

.goalsHead {
  color: #925FF0;
  font-weight: bold;
}

.usernameText {
  color: white;
  font-weight: bold;
}

.mainH1OfProf {
  color: #925FF0;
}

/* styling of the margin and border just for now, will change when fully styled into their own tabs that only appear once they are "clicked" on to become active */
.usersRoutesDiv {
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
    border: 5px solid red;
}

/* styling of the margin and border just for now, will change when fully styled into their own tabs that only appear once they are "clicked" on to become active */
.usersPostsDiv {
  border: 5px solid darkblue;
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

/* styling of the margin and border just for now, will change when fully styled into their own tabs that only appear once they are "clicked" on to become active */
.followingDiv {
  border: 2px solid rgb(87, 11, 17);
  margin-top: 10px;
  margin-bottom: 10px;
}

/* styling of the margin and border just for now, will change when fully styled into their own tabs that only appear once they are "clicked" on to become active */
.followerDiv {
  border: 2px solid rgb(118, 134, 15);
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>