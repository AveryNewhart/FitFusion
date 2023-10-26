<script setup lang="ts">

import Nav from './/Nav.vue';
import Goals from './Goals.vue';
import WorkoutCalender from './WorkoutCalender.vue';
import ProfilePicture from './ProfilePicture.vue';

</script>

<template>
 <div>
    <Nav />
 </div> 
  <div class="">
    <h1>profile</h1>
    <div>
      <Goals />
      <p>div for the imported goals component, personal goals to be added on the users profile</p>
    </div>
    <div>
      <WorkoutCalender />
      <p>div for the workout calender</p>
    </div>
    <div>
      <ProfilePicture />
      <p>div for the profile picturer</p>
    </div>
  </div>

</template>

<style scoped>
</style>