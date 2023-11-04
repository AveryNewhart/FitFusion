<script setup lang="ts">

import Nav from './/Nav.vue';

// THIS IS COMMENTED OUT CODE FOR MAPBOX API. API THAT MIGHT BE USED.
// ANOTHER ONE TO LOOK INTO, IS SMASHAPI, IT HAS A FEW THINGS I WOULD LIKE TO USE 

// import { ref, onMounted } from 'vue';
// import type { Map } from 'mapbox-gl';


// mapbox-gl.accessToken = 'pk.eyJ1IjoiYXZlcnluZXdoYXJ0IiwiYSI6ImNsb2MzZWhldTBobGgyam80cWVqNjRraHQifQ.y2LJ6rP0_ze_zP3yXaSvTQ';

// const map = ref<Map | null>(null);

// const toggleForm = () => {

// };

// onMounted(() => {
//   const mapContainer = document.getElementById('map-container');
//   if (mapContainer) {
//     const mapInstance = new mapboxgl.Map({
//       container: mapContainer,
//       style: 'mapbox://styles/mapbox/streets-v12',
//       center: [-71.224518, 42.213995],
//       zoom: 9,
//     });
//     map.value = mapInstance;
//   }
// });

</script>

<!-- HAVE IT SO THERE IS A MAP WHERE A USER CAN SEE RUNNING ROUTES IN THE AREA -->
<!-- HAVE IT SO THE USER CAN "CREATE A ROUTE" THEN THE ROUTE SAVES FROM THEIR RUN, THEN THE ROUTE IS SAVED TO THE USERS SAVED ROUTES SECTION ON THE PAGE -->
<!-- HAVE AN AREA APPEAR WHEN A USER SELECTS A ROUTE, THE TOP 3 TIMES RECORDED ON THE ROUTE WILL SHOW, AND BY WHO -->

<template>
<div>
  <Nav />
</div>
  <div class="">
    <h1>generate running routes</h1>
    <div ref="mapContainer" class="map-container"></div>
  </div>

</template>

<style scoped>
</style>