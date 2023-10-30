<script setup lang="ts">

import Nav from './/Nav.vue';

</script>

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