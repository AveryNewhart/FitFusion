<script setup lang="ts">

import { ref } from 'vue';

import Settings from './Settings.vue';

const isSettingsModalOpen = ref(false);

const openSettingsModal = () => {
  isSettingsModalOpen.value = true;
};

const closeSettingsModal = () => {
  isSettingsModalOpen.value = false;
};

</script>

<!-- DECIDE FONT FOR TEXT -->
<!-- DECIDE COLORS OF BUTTONS, DO I WANT BACKGROUNDS, COLOR CHANGING TEXT, SHADOWS, ETC. MAKE FUTURISTIC STYLE -->

<template>
  <nav class="navBackground p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-white text-2xl font-bold navHeader">FitFusion</router-link>

      <div class="space-x-4">
        <router-link to="/" class="navButtons">Home</router-link>
        <router-link to="/profile" class="navButtons">Profile</router-link>
        <router-link to="/login" class="navButtons">Login/Signup</router-link>
        <router-link to="/feed" class="navButtons">Feed</router-link>
        <router-link to="/calorietracker" class="navButtons">Calorie Tracker</router-link>
        <router-link to="/runningroutes" class="navButtons">Running Routes</router-link>
        <router-link to="/workoutcalender" class="navButtons">Workout Calender</router-link>

    <button class="links" @click="openSettingsModal">Settings</button>

    <!-- Modal for settings component -->
    <div class="modal" v-if="isSettingsModalOpen">
      <div class="modal-overlay">
        <div class="modal-content">
          <button @click="closeSettingsModal" class="close-button">X</button>
          <Settings />
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>
</template>


<style scoped>

.navHeader {
  margin-bottom: 10px;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1100; 
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.links {
  margin-right: 25px;
  margin-bottom: 10px;
  color: #A3FDA1;
}

.links:hover {
  color: #925FF0;
}

.navButtons {
  color: #925FF0;
}

.navButtons:hover {
  color: #A3FDA1;
}

.navBackground {
  background-color: #2d2d2d;
}

/* gradually changing border color effect */
.navBackground::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(to right, #A3FDA1, #925FF0);
}



</style>
