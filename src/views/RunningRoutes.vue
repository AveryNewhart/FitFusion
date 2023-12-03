<script setup lang="ts">
import { 
  //  ref, 
  onMounted, onBeforeUnmount } from 'vue';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import 'mapbox-gl/dist/mapbox-gl.css';


import Nav from '../components/Nav.vue';

let map: mapboxgl.Map | null = null;
let geocoder: MapboxGeocoder | null = null;
// const searchLocation = ref('');

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


      //  Mapbox Geocoder control
      geocoder = new MapboxGeocoder({
        accessToken: 'pk.eyJ1IjoiYXZlcnluZXdoYXJ0IiwiYSI6ImNsb2MzZWhldTBobGgyam80cWVqNjRraHQifQ.y2LJ6rP0_ze_zP3yXaSvTQ',
        placeholder: 'next run is waiting',
        mapboxgl: mapboxgl,
      });

      // Geocoder control to the integrated search bar
      // geocoder.addTo('.mySearch');

      map.addControl(geocoder);


      const searchIcon = document.querySelector('.mapboxgl-ctrl-geocoder--icon-search');
        if (searchIcon) {
          // remove the search icon
          searchIcon.parentNode?.removeChild(searchIcon);
        }

      const geocoderContainer = document.querySelector('.suggestions');
      const geocoderInput = document.querySelector('.mapboxgl-ctrl-geocoder input');

        if (geocoderContainer && geocoderInput) {
          (geocoderContainer as HTMLDivElement).style.backgroundColor = '#2d2d2d';
          (geocoderContainer as HTMLDivElement).style.color = '#a3fda1';
          (geocoderContainer as HTMLDivElement).style.borderRadius = '5px';
          (geocoderContainer as HTMLDivElement).style.border = '2px solid #925ff0';
          (geocoderContainer as HTMLDivElement).style.marginTop = '5px';
          (geocoderContainer as HTMLDivElement).style.height = '100px';
          (geocoderContainer as HTMLDivElement).style.overflowY = 'scroll';
          (geocoderContainer as HTMLDivElement).style.cursor = 'pointer';
          (geocoderContainer as HTMLDivElement).style.position = 'relative'; // position relative for absolute positioning of the close button

          (geocoderInput as HTMLInputElement).style.backgroundColor = '#925ff0';
          (geocoderInput as HTMLInputElement).style.color = 'white';
          (geocoderInput as HTMLInputElement).style.border = '2px solid #a3fda1';
          (geocoderInput as HTMLInputElement).style.borderRadius = '5px';

      // hide the default close button using CSS
      const customStyles = document.createElement('style');
        customStyles.innerHTML = `
          .mapboxgl-ctrl-geocoder .mapboxgl-ctrl-geocoder--icon-close {
            fill: #f56565 !important;
          }
      `;
      document.head.appendChild(customStyles);

    // event listener to clear the input when the close icon is clicked
    geocoderContainer.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      const closeIcon = target.closest('.mapboxgl-ctrl-geocoder--icon-close');

      if (closeIcon) {
        (geocoderInput as HTMLInputElement).value = '';
      }
    });

        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            // check added nodes for li elements
            mutation.addedNodes.forEach((addedNode) => {
              if (addedNode instanceof HTMLElement && addedNode.tagName === 'LI') {
                addedNode.style.borderBottom = '2px solid #925ff0';
                addedNode.style.marginBottom = '3px';
              }
            });
          });
        });

        // configure and start the observer
        const observerConfig = { childList: true, subtree: true };
        observer.observe(geocoderContainer, observerConfig);
      }

      // handle geocoder result
      geocoder.on('result', (result) => {
      // log the result to the console for now
      console.log('Geocoder result:', result);

      // center the map on the result
      map!.flyTo({ center: result.result.center, zoom: 12 });
    });
      


  //!! HAVE TO STILL MESS WITH THE LINE BEING DASHED/SOLID

    // draw control to the map
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        line_string: true,
        trash: true,
      },
      styles: [
        // style for inactive (solid) line
        {
          'id': 'gl-draw-line-inactive',
          'type': 'line',
          'filter': ['all', ['==', 'active', 'false'],
            ['==', '$type', 'LineString'],
            ['!=', 'mode', 'static']
          ],
          'layout': {
            'line-cap': 'round',
            'line-join': 'round'
          },
          'paint': {
            'line-color': '#925ff0',
            'line-width': 2
          }
        },

        // style for active (dashed) line
        {
          'id': 'gl-draw-line-active',
          'type': 'line',
          'filter': ['all', ['==', '$type', 'LineString'],
            ['==', 'active', 'true']
          ],
          'layout': {
            'line-cap': 'round',
            'line-join': 'round'
          },
          'paint': {
            'line-color': '#925ff0',
            'line-dasharray': [0.2, 2],
            'line-width': 2
          }
        },
      ],
    });

    map!.addControl(draw);

  //!! HAVE TO STILL MESS WITH THE LINE BEING DASHED/SOLID



    // !!!!! THIS IS COMMENTED OUT LOGIC FOR IF SEARCH BAR IS MOVED BACK TO THE TOP OF THE PAGE !!!!!!!

    //           //  Mapbox Geocoder control
    //           geocoder = new MapboxGeocoder({
    //     accessToken: 'pk.eyJ1IjoiYXZlcnluZXdoYXJ0IiwiYSI6ImNsb2MzZWhldTBobGgyam80cWVqNjRraHQifQ.y2LJ6rP0_ze_zP3yXaSvTQ',
    //     mapboxgl: mapboxgl,
    //   });

    //   // Geocoder control to the integrated search bar
    //   // geocoder.addTo('.mySearch');

    //   // styles to the Mapbox Geocoder
    //   const geocoderInput = document.querySelector('.mapboxgl-ctrl-geocoder input');
    //     if (geocoderInput) {
    //       (geocoderInput as HTMLInputElement).style.backgroundColor = '#a3fda1';
    //     }

    //   // handle geocoder result
    //   geocoder.on('result', (result) => {
    //   // log the result to the console for now
    //   console.log('Geocoder result:', result);

    //   // center the map on the result
    //   map!.flyTo({ center: result.result.center, zoom: 12 });
    // });
    


  });

  onBeforeUnmount(() => {
  if (map) {
    map.remove();
  }
});


</script>

<!-- MAKE IT SO WHEN YOU START TYPING, THERE BECOMES A BACKGROUND BEHIND THE LIST THAT IS POPULATING.-->
<!-- CHANGE THE BACKGROUND OF THE INPUT, THE PLACEHOLDER OF IT, AND THE COLOR OF THE TEXT. -->
<!-- MAKE IT SO ONLY THE FIVE CLOSEST RESPONSES POPULATE SO IT DOESNT TAKE UP CRAZY SPACE. -->

<!-- GET ROUTE RUNNING LINES TO BE DOTTED WHILE DRAWING THEN SOLID WHEN FINISHED -->

<!-- ICONS FOR DRAWING BUTTONS -->

<!-- MAKE IT SO MAP FULLSCREEN WORKS, CHANGE THE HEIGHT TO BE ABLE TO BECOME THE MAX HEIGHT -->

<!-- when mobile styling the running data boxes, adjust the height size of the text to sync up with the size of the boxes downsizing for when users have zoom feature on their phone -->


<!-- ADD A SECTION TO SEE THE ROUTES IN THE AREA!!!!!! -->

<template>
  <div>
    <Nav />
  </div>
  <div class="mainRunningDiv min-h-screen">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-semibold mb-4 runningHeader">Running Routes</h1>

      <!-- <div class="mb-4 mySearch"> -->
        <!-- <input
          v-model="searchLocation"
          placeholder="where's the next run?"
          class="border rounded px-3 py-2"
        />
        
        <button
          @click="searchRoutes"
          class="saveBtn px-4 py-2 ml-2"
        >
          Search
        </button> -->
      <!-- </div> -->

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
/* 
.mySearch  {
  background-color: #a3fda1;
} */




</style>
