<script setup lang="ts">

import Nav from './/Nav.vue';

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