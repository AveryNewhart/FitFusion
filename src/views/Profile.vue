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

<!-- WITH THE EXTRA SPACE, SHOULD I ADD THE PERSONAL BESTS SECTION TO THE PROFILE HEADER? -->

<template>
  <div>
    <Nav />
  </div>
  <div class="profileBackground">
    <h1 class="text-center mainH1OfProf">Your FitFusion Profile</h1>
    <div class="mainProfileDiv">
      <div>
        <h2 class="usernameText">Username HERE</h2>
        <div class="bioDiv">
          <Bio />
        </div>
      </div>
      <div class="profilePicDiv">
        <ProfilePicture />
      </div>
      <div class="statsDiv">
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
  /* background-color: #2d2d2d; */
  background-color: #2d2d2d;
  color: white;
  padding: 20px;
}

.profilePicDiv {
  /* border: 1px solid red; */
}

.goalsHead {
  color: #925FF0;
  font-weight: bold;
}

.usernameText {
  /* color: white; */
  font-weight: bold;
}

.mainH1OfProf {
  color: #925FF0;
}

.mainProfileDiv {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  margin-top: 20px;
}

.bioDiv {
  max-width: 150px;
}


.statsDiv {
  display: flex;
  flex-wrap: wrap;
}

.usersRoutesDiv,
.goalDiv {
  border: 1px solid transparent;
  margin: 10px;
  padding: 10px;
}

.personalBestsDiv,
.followingDiv,
.followerDiv,
.bioDiv {
  border: 1px solid transparent;
  /* margin: 10px; */
  padding: 10px;
}

.PrsAndGoals,
.usersPostsDiv {
  border: 1px solid transparent;
  margin-top: 20px;
  padding: 20px;
}

.returnToTopButton {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #925FF0;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>