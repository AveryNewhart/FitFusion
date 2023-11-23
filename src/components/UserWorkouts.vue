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
<!-- WHEN THE MODAL OPENS, THERE ARE ALL THE WORKOUTS CATEGORIES AND THE SAVED WORKOUTS FOR EACH ONE. THE CATEGORIES ARE ARMS LEGS CHEST AND BACK FOR NOW, WILL ADD MORE LATER -->

<!-- HAVE IT SP WHEN THE USER CLICKS ON ONE OF THEIR SAVED WORKOUTS, ANOTHER MODAL OPENS WITH THE DETAILS OF THE WORKOUT! -->

<!-- CHANGE WHERE THE CLOSE BUTTON IS, MAKE IT SO ITS A BUTTON THAT SAYS "CLOSE" THAT JUST GOES UNDER THE USERS SAVED WORKOUTS WHEN THE MODAL IS OPEN -->

  <template>
    <div class="relative">
      <!-- button to trigger the modal -->
      <button @click="openModal" class="savedWorkoutsBtn px-4 py-2 rounded">SAVED WORKOUTS</button>
  
      <!-- modal -->
      <div v-if="showModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white p-8 rounded shadow-md">
          <!-- close button for the modal -->
          <button @click="closeModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800">&times;</button>
  
          <!-- list of saved workouts  -->
            <div>
                <h3>Arms</h3>
                <button>saved workout 1</button>
            </div>
            <div>
                <h3>Chest</h3>
                <button>saved workout 1</button>
            </div>
            <div>
                <h3>Legs</h3>
                <button>saved workout 1</button>
            </div>
            <div>
                <h3>Back</h3>
                <button>saved workout 1</button>
            </div>
            <!-- more workout types will be added later -->
        </div>
      </div>
    </div>
  </template>

<style scoped>

.savedWorkoutsBtn {
  background-color: #a3fda1;
  border: 2px solid #925ff0;
  color: #2d2d2d;
  font-weight: bold;
}

</style>