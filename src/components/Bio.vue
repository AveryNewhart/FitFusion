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
    <h3 class="bioText">{{ bio || 'Bio is empty' }}</h3>
    <button @click="openModal" class="bioEditBtn ml-2 cursor-pointer rounded">Edit</button>

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

.bioText {
  color: white;
}

.bioEditBtn {
  background-color: #925ff0;
  border: 2px solid #a3fda1;
  padding: 3px;
}

</style>