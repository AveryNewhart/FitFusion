<script setup lang="ts">

import Nav from '../components/Nav.vue';
import Goals from '../components/Goals.vue';
import ProfilePicture from '../components/ProfilePicture.vue';
import Followers from '../components/Followers.vue';
import Following from '../components/Following.vue';
import UsersPosts from '../components/UsersPosts.vue';
import PersonalBests from '../components/PersonalBests.vue';
import Bio from '../components/Bio.vue';
import UsersRoutes from '../components/UsersRoutes.vue';
import UserWorkouts from '../components/UserWorkouts.vue';

</script>

<!-- STYLE WHAT WILL BE THE HEADER OF THE PROFILE AND ALL THE COMPONENTS POSITIONING -->

<!-- PROFILE HEADER -->
<!-- I WANT THE USERS USERNAME CENTERED AT THE TOP OF ITS DIV, THE PROFILE PICTURE TO THE LEFT, THEN THE 4 BUTTONS OF FOLLOWERS FOLLOWING SAVED ROUTES AND SAVED WORKOUTS TO BE TO THE RIGHT OF THE PROFILE PICTURE IN A 2 ROW 2 COLUMN FORMATION -->
<!-- THE BIO WILL BE CENTERED UNDER ALL OF THAT  -->


<!-- PERSONAL BESTS AND GOALS SECTION -->
<!-- THE GOALS AND PERSONAL BESTS SECTIONS IN THEIR OWN DIV UNDER THE PROFILE HEADER. -->


<!-- USERS POSTS -->
<!-- UNDER ALL OF THE OTHER STUFF, MAKE A BUTTON ALSO FOR THE BOTTOM RIGHT OF THE SCREEN THAT ALLOWS THE USER TO "RETURN TO TOP" OF THE PAGE -->

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
        <UserWorkouts />
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