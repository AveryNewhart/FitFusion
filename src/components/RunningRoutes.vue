<script setup lang="ts">
import { ref } from 'vue';

import Nav from './/Nav.vue';

const searchLocation = ref('');

const searchRoutes = () => {
  // logic for searching routes based on the entered location
  // use the value of searchLocation here
};


</script>

<!-- NEXT IS CREATING ALL THE LOGIC, SMASH API or MAPBOX API -->


<template>
  <div>
    <Nav />
  </div>
  <div class="flex flex-col items-center mt-8">
    <h1 class="text-3xl font-semibold mb-4">Generate Running Routes</h1>

    <!-- Search Bar -->
    <div class="mb-4">
      <input
        v-model="searchLocation"
        placeholder="where's the next run?"
        class="border rounded px-3 py-2"
      />
      <button
        @click="searchRoutes"
        class="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Search
      </button>
    </div>

    <!-- MAP CONTAINER -->
    <div ref="mapContainer" class="w-full h-96 rounded-lg mb-8 mapContainer">the map will be in here</div>
    <!-- MAP CONTAINER -->

    <!-- save a route -->
    <div class="mb-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded">Save This Route</button>
    </div>

    <!-- Personal Best Section -->
    <div class="w-full mt-8 mb-4">
      <h2 class="text-xl font-semibold mb-2">Personal Best For This Route... </h2>
      <!-- Display the personal best time -->
      <!-- <p>{{ personalBestTime ? `Your Personal Best: ${personalBestTime}` : 'No Personal Best recorded yet' }}</p> -->
    </div>

    <!-- saved routes section -->
    <div class="w-full">
      <h2 class="text-xl font-semibold mb-2">Your Saved Routes</h2>
      <!-- list of user's saved routes here -->
      <!-- the routes will be clickable links that once clicked, the map will pull up that route. -->
      <ul class="list-disc pl-4">
        <a href="runningroutes"><li>Route 1</li></a>
        <a href="runningroutes"><li>Route 2</li></a>
      </ul>
    </div>

    <!-- selected route section -->
    <div class="w-full mt-8">
      <h2 class="text-xl font-semibold mb-2">Top Times On This Route</h2>
      <!-- top 3 times recorded -->
      <ol class="list-decimal pl-4">
        <li>Paul - 20:30</li>
        <li>Avery - 22:15</li>
        <li>Fred n Tiny (duo) - 23:00</li>
      </ol>
    </div>
  </div>
</template>

<style scoped>

.mapContainer {
  border: 2px solid darkgreen;
}

</style>