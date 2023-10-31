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

<template>
  <nav class="bg-gradient-to-r from-green-400 to-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-white text-2xl font-bold">FitFusion</router-link>

      <div class="space-x-4">
        <router-link to="/" class="text-white">Home</router-link>
        <router-link to="/profile" class="text-white">Profile</router-link>
        <router-link to="/login" class="text-white">Login/Signup</router-link>
        <router-link to="/feed" class="text-white">Feed</router-link>
        <router-link to="/calorietracker" class="text-white">Calorie Tracker</router-link>
        <router-link to="/runningroutes" class="text-white">Running Routes</router-link>

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
}


</style>
