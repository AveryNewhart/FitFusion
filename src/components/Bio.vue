<script setup lang="ts">
import { ref } from 'vue';

const bio = ref<string>('');
const newBio = ref<string>('');
const isModalOpen = ref<boolean>(false);

const openModal = () => {
  isModalOpen.value = true;
  newBio.value = bio.value; // makes the modal text, the users entered text
};

const closeModal = () => {
  isModalOpen.value = false;
};

const saveBio = () => {
  bio.value = newBio.value;
  isModalOpen.value = false;
};
</script>


<template>
  <div class="relative">
    <h3>{{ bio || 'Bio is empty' }}</h3>
    <button @click="openModal" class="ml-2 text-blue-500 cursor-pointer">Edit</button>

    <!-- modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-4 rounded-lg">
        <div class="flex justify-end">
          <button @click="closeModal" class="text-red-500">&times;</button>
        </div>
        <textarea v-model="newBio" class="w-full h-32 p-2 border rounded mb-4"></textarea>
        <button @click="saveBio" class="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>