<script setup lang="ts">
import {  onMounted, onBeforeUnmount } from 'vue';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';


import Nav from '../components/Nav.vue';

let map: mapboxgl.Map | null = null;

  onMounted(() => {
    // initialize the map
    map = new mapboxgl.Map({
      container: document.getElementById('map') as HTMLDivElement,
      style: 'mapbox://styles/averynewhart/clpesz87q006q01qm5h5l70y7', // can choose other styles, will have to look at docs to see which one will look best
      center: [-74.5, 40], // initial map center, can change to anywhere
      zoom: 9, // initial map zoom, can change later, make sure this is able to go up and down
      accessToken: 'pk.eyJ1IjoiYXZlcnluZXdoYXJ0IiwiYSI6ImNsb2MzZWhldTBobGgyam80cWVqNjRraHQifQ.y2LJ6rP0_ze_zP3yXaSvTQ',
    });


      //  default controls
      map.addControl(new mapboxgl.NavigationControl(), 'top-left');
      map.addControl(new mapboxgl.GeolocateControl({ positionOptions: { enableHighAccuracy: true }, trackUserLocation: true }), 'top-left');
      map.addControl(new mapboxgl.ScaleControl(), 'bottom-left');
      map.addControl(new mapboxgl.FullscreenControl(), 'top-left');
      map.addControl(new mapboxgl.AttributionControl(), 'bottom-right');

      const attributionControl = document.querySelector('.mapboxgl-ctrl-attrib');
        if (attributionControl) {
          (attributionControl as HTMLElement).style.display = 'none';
        }


      // geocoder control to the map
      const geocoder = new MapboxGeocoder({
        accessToken: 'pk.eyJ1IjoiYXZlcnluZXdoYXJ0IiwiYSI6ImNsb2MzZWhldTBobGgyam80cWVqNjRraHQifQ.y2LJ6rP0_ze_zP3yXaSvTQ',
        mapboxgl: mapboxgl,
      });

      map.addControl(geocoder);

      // draw control to the map
      const draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          line_string: true,
          trash: true,
        },
      });

      map.addControl(draw);

    // any additional map functionality here
  });

  onBeforeUnmount(() => {
  if (map) {
    map.remove();
  }
});




</script>

<!-- FINISH ADDING COLOR SCHEME -->

<!-- MAKE IT SO MAP FULLSCREEN WORKS, CHANGE THE HEIGHT TO BE ABLE TO BECOME THE MAX HEIGHT -->

<!-- STYLE THE MAP -->


<template>
  <div>
    <Nav />
  </div>
  <div class="mainRunningDiv">
  <div class="flex flex-col items-center">
    <h1 class="text-3xl font-semibold mb-4">Running Routes</h1>

    <!-- MAP CONTAINER -->
    <div ref="map" id="map" class="w-full h-96 rounded-lg mb-8 map"></div>
    <!-- MAP CONTAINER -->

    <!-- save a route -->
    <div class="mb-4">
      <button class="bg-blue-500 text-white px-4 py-2 rounded">Save This Route</button>
    </div>

    <!-- Personal Best Section -->
    <div class="w-full pbSec mb-4">
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
  </div>
</template>

<style scoped>

.map {
  border: 2px solid darkgreen;
  z-index: 999;
}

.mainRunningDiv {
  background-color: #2d2d2d;
}

.pbSec {
  margin-top: 150px;
}



</style>