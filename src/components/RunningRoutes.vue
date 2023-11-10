<script setup lang="ts">

import Nav from './/Nav.vue';


</script>

<!-- I WANT TO HAVE A SEARCH BAR FOR THE USER TO SEARCH A LOCATION AND A BUTTON WITH THAT THAT THE USER CLICKS WHEN THEY WANT TO SEARCH THE LOCATION(LOGIC WILL BE ADDED LATER WHEN API FOR MAP IS ADDED) -->
<!-- I WANT TO INCLUDE A PERSONAL BEST SECTION FOR THE USER NO MATTER THEIR TIME, ON ANY ROUTE WHEN THE USER CLICKS ON IT, IT DOESN'T HAVE TO BE A SAVED ROUTE EITHER. SO A SECTION FOR THAT NEEDS TO BE ADDED -->



<template>
  <div>
    <Nav />
  </div>
  <div class="flex flex-col items-center mt-8">
    <h1 class="text-3xl font-semibold mb-4">Generate Running Routes</h1>

    <!-- MAP CONTAINER -->
    <div ref="mapContainer" class="w-full h-96 rounded-lg mb-8 mapContainer">the map will be in here</div>
    <!-- MAP CONTAINER -->

    <!-- save a route -->
    <div class="mb-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded">Save This Route</button>
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