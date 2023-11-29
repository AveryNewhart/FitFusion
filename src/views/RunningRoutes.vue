<script setup lang="ts">
import {  ref, onMounted, onBeforeUnmount } from 'vue';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';


import Nav from '../components/Nav.vue';

let map: mapboxgl.Map | null = null;
let geocoder: MapboxGeocoder | null = null;
const searchLocation = ref('');

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


      // // geocoder control to the map
      // const geocoder = new MapboxGeocoder({
      //   accessToken: 'pk.eyJ1IjoiYXZlcnluZXdoYXJ0IiwiYSI6ImNsb2MzZWhldTBobGgyam80cWVqNjRraHQifQ.y2LJ6rP0_ze_zP3yXaSvTQ',
      //   mapboxgl: mapboxgl,
      // });
      

      // map.addControl(geocoder);

      // draw control to the map
      const draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          line_string: true,
          trash: true,
        },
        styles: [
          {
            id: 'gl-draw-line',
            type: 'line', // mess with this area to get the line to be dashed while drawing, then solid when then user is done drawing the route. 
            paint: {
              'line-color': '#925ff0', // line color
              'line-width': 2,
            },
          },
          ],
      });

      map.addControl(draw);

        //  Mapbox Geocoder control
      geocoder = new MapboxGeocoder({
        accessToken: 'pk.eyJ1IjoiYXZlcnluZXdoYXJ0IiwiYSI6ImNsb2MzZWhldTBobGgyam80cWVqNjRraHQifQ.y2LJ6rP0_ze_zP3yXaSvTQ',
        mapboxgl: mapboxgl,
      });

      // Geocoder control to the integrated search bar
      geocoder.addTo('.mySearch');

      // handle geocoder result
      geocoder.on('result', (result) => {
      // log the result to the console for now
      console.log('Geocoder result:', result);

      // center the map on the result
      map!.flyTo({ center: result.result.center, zoom: 12 });
    });
  });

  onBeforeUnmount(() => {
  if (map) {
    map.remove();
  }
});

// Trigger Mapbox Geocoder search when custom search button is clicked
// const searchRoutes = () => {
//   // use the value of searchLocation here
//   // if (searchLocation.value && geocoder) {
//   //   // Manually set the Geocoder input value
//   //   geocoder.setInput(searchLocation.value);

//   //   // Trigger the Geocoder search
//   //   geocoder.on('result', (result) => {
//   //     console.log('Geocoder result:', result);
//   //     // Handle the result here, e.g., center the map on the result
//   //     map?.flyTo({ center: result.result.center, zoom: 12 });
//   //   });
//   // }
// };


// Trigger Mapbox Geocoder search when custom search button is clicked
const searchRoutes = () => {
  if (searchLocation.value && geocoder) {
    // Manually set the Geocoder input value
    geocoder.setInput(searchLocation.value);

    // Trigger the Geocoder search
    geocoder.query(searchLocation.value);
  }
};


</script>

<!-- GET SEARCH BAR TO WORK FOR MY CUSTOM SEARCH BAR, FIGURE OUT HOW TO STYLE SEARCH BAR NOW, OR SEE I IF OTHER SEARCH BAR ON MAPBOX SITE -->
<!-- DO I HAVE TO BUT THE SEARCH ROUTE LOGIC INTO THE MAP FUNCTION? LIKE WHERE GEOCODER IS DEFINED, DO I PUT THAT INSIDE THE SEARCH ROUTES FUNCTION? -->

<!-- GET ROUTE RUNNING LINES TO BE DOTTED WHILE DRAWING THEN SOLID WHEN FINISHED -->

<!-- ICONS FOR DRAWING BUTTONS -->

<!-- MAKE IT SO MAP FULLSCREEN WORKS, CHANGE THE HEIGHT TO BE ABLE TO BECOME THE MAX HEIGHT -->

<!-- when mobile styling the running data boxes, adjust the height size of the text to sync up with the size of the boxes downsizing for when users have zoom feature on their phone -->


<template>
  <div>
    <Nav />
  </div>
  <div class="mainRunningDiv min-h-screen">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-semibold mb-4 runningHeader">Running Routes</h1>

      <div class="mb-4 mySearch">
        <input
          v-model="searchLocation"
          placeholder="where's the next run?"
          class="border rounded px-3 py-2"
        />
        <button
          @click="searchRoutes"
          class="saveBtn px-4 py-2 ml-2"
        >
          Search
        </button>
      </div>

      <!-- MAP CONTAINER -->
      <div ref="map" id="map" class="w-full h-96 rounded-lg mb-8 map"></div>
      <!-- MAP CONTAINER -->

      <!-- save a route -->
      <div class="mb-4">
        <button class="saveBtn px-4 py-2">Save This Route</button>
      </div>

      <div class="runningDataDiv">
        <!-- selected route section -->
        <div class=" px-2 routeData">
          <h2 class="text-xl font-semibold mb-2 runH2s">Top Times On This Route</h2>
          <!-- top 3 times recorded -->
          <ol class="list-decimal pl-4 text-white">
            <li>Paul - 20:30(gold medal)</li>
            <li>Avery - 22:15(silver medal)</li>
            <li>Fred n Tiny (duo) - 23:00(bronze medal)</li>
          </ol>
        </div>

        <!-- Personal Best Section -->
        <div class=" px-2 pbSec routeData">
          <h2 class="text-xl font-semibold mb-2 runH2s">Personal Bests For This Route... </h2>
          <!-- Display the personal best time -->
          <!-- <p>{{ personalBestTime ? `Your Personal Best: ${personalBestTime}` : 'No Personal Best recorded yet' }}</p> -->
          <p class="text-white">Farthest Distance: date/time/length/avg pace</p>
          <p class="text-white">Fastest Pace: fastest 1, 1.5, 3, 5, 10 etc</p>
        </div>

        <!-- saved routes section -->
        <div class=" px-2 routeData">
          <h2 class="text-xl font-semibold mb-2 runH2s">Your Saved Routes</h2>
          <!-- list of user's saved routes here -->
          <!-- the routes will be clickable links that once clicked, the map will pull up that route. -->
          <ul class="list-disc pl-4 text-white">
            <a class="routeHover" href="runningroutes"><li>Route 1</li></a>
            <a class="routeHover" href="runningroutes"><li>Route 2</li></a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.map {
  border: 2px solid darkgreen;
  /* z-index: 999; */
}

.mainRunningDiv {
  background-color: #2d2d2d;
}

.runningHeader {
  color: #925ff0;
}

.runningDataDiv {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;margin-top: 15px;
}

.routeData {
  border: 5px solid #a3fda1;
  border-radius: 10px;
  width: 300px;
  height: 250px;
  overflow-y: scroll;
  margin-left: 25px;
  margin-right: 25px;
}

.runH2s {
  color: #925ff0;
  text-align: center;
  margin-top: 5px;
}

.routeHover:hover {
  color: #925ff0;
}

.saveBtn {
  border: 3px solid #a3fda1;
  background-color: #925ff0;
  color: white;
  border-radius: 10px;
}

.saveBtn:hover {
  background-color: #a3fda1;
  border: 3px solid #925ff0;
  color: #2d2d2d;
}




</style>
