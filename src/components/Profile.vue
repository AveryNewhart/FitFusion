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
    <div class="workoutCalenderDiv">
      <WorkoutCalender />
    </div>
    <div>
      <ProfilePicture />
    </div>
  </div>

</template>

<style scoped>

.workoutCalenderDiv {
  border: 1px solid green;
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>