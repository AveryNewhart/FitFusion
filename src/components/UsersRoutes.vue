<script setup lang="ts">
import { ref } from 'vue';

// use ref to track the modal state
const showModal = ref(false);

// function to open the modal
const openModal = () => {
  showModal.value = true;
};

// function to close the modal
const closeModal = () => {
  showModal.value = false;
};
</script>

<!-- CHANGE WHERE THE CLOSE BUTTON IS, MAKE IT SO ITS A BUTTON THAT SAYS "CLOSE" THAT JUST GOES UNDER THE USERS SAVED ROUTES WHEN THE MODAL IS OPEN -->

  <template>
    <div class="relative">
      <!-- button to trigger the modal -->
      <button @click="openModal" class="savedRoutesBtn px-4 py-2 rounded">SAVED ROUTES</button>
  
      <!-- modal -->
      <div v-if="showModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white p-8 rounded shadow-md">
          <!-- close button for the modal -->
          <button @click="closeModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">&times;</button>
  
          <!-- list of saved routes  -->
          <!-- routes will changes later, they will be the id of the users saved route -->
          <ul>
            <li><router-link to="/runningroutes/route1">Route 1</router-link></li>
            <li><router-link to="/runningroutes/route2">Route 2</router-link></li>
            <!-- add more routes as needed -->
            <!-- will probably end up changing the template to display all of the users saved routes based on how many they have -->
          </ul>
        </div>
      </div>
    </div>
  </template>

<style scoped>

.savedRoutesBtn {
  background-color: #925FF0;
  border: 2px solid #A3FDA1;
  color: #2d2d2d;
  font-weight: bold;
}

</style>