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
  <div class="nav">
    <router-link class="links" to="/">Home</router-link>
    <router-link class="links" to="/profile">Profile</router-link>
    <router-link class="links" to="/login">Login/Signup</router-link>
    <router-link class="links" to ="/feed">Feed</router-link>
    <router-link class="links" to ="/calorietracker">Calorie Tracker</router-link>
    <router-link class="links" to ="/runningroutes">Running Routes</router-link>

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
