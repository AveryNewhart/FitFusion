<script setup lang="ts">

import Nav from './/Nav.vue';

</script>

<!-- FOR NORMAL VIEW -->
<!-- CREATE BOXES WITH DIFFERENT TEXT INPUTS AROUND THE SCREEN EXPLAINING THE APP, SOME BUTTONS TO ROUTE TO CREATE AN ACCOUNT AND SUCH. -->

<!-- MOBILE VIEW -->
<!-- WILL HAVE TO HAVE MORE OF A BLAND LANDING PAGE, MAYBE A SMALL DESCRIPTION AND BUTTON TO LOGIN/SIGNUP -->
<!-- LOOK AT PHOTOS IN DISCORD SERVER FOR POTENTIAL DARK THEMES -->


<template>
<div>
  <Nav />
</div>
<div class="background-container">
    <div class="theHome">
      <h1 class="text-center">Welcome To FitFusion(tbd)</h1>
      <p>Track calories, create a workout schedule/calendar, generate running routes, follow friends, post your workouts or running routes for your friends to see, and interact with your friends on the posts!</p>
    </div>
  </div>

</template>

<style scoped>

.background-container {
  background-image: url('/images/runningBackground.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  height: calc(100vh);
}

.theHome {
  color: black;
}

</style>