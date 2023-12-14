<script setup lang="ts">

// <!-- NEED TO DO LOGIC FOR -->
// <!-- USER SHOULD BE ABLE TO SAVE WORKOUTS TO THE RESPECTIVE CATEGORIES, EX SAVING A WORKOUT THAT IS FOR ARMS TO THE ARM CATEGORY. -->
// <!-- ON THE BACKEND THE USER WILL HAVE TO HAVE WORKOUTS SAVE TO THEM. -->

// <!-- HAVE IT SO THE USER IS ABLE TO ADD A WORKOUT TO ONE OF THE CATEGORIES SO THAT IS ADDED TO THE LIST OF OPTIONS THE GENERATE BUTTON CHOOSES FROM -->

// <!-- MAKE THE "SAVED WORKOUT" A CLICKABLE LINK THAT OPENS A MODAL OF THE SAVED WORKOUT, LET THE USER NAME THEIR SAVED WORKOUT -->
// <!-- LET THERE BE A COPY BUTTON FOR THE USER TO BE ABLE TO COPY THE WHOLE WORKOUT AND THEN THEY SHOULD BE ABLE TO PASTE THE WORKOUT WHEN THEY CLICK WHICH DAY THEY WANT IT. -->

// <!-- CREATE THE FUNCTIONS FOR EACH WORKOUT THAT CAN BE GENERATED. -->
// <!-- EACH WORKOUT WILL HAVE A POOL OF WORKOUTS FOR THAT TYPE THAT WILL HAVE 5 WORKOUTS TO BE PICKED FROM THERE AT RANDOM -->
// <!-- THE 5 RANDOM WORKOUTS FOR THAT TYPE WILL GO INTO THE 5 INPUT FIELDS FOR THE DAY SELECTED -->

import { ref, computed } from 'vue';

import Nav from '../components/Nav.vue';
import WorkoutCarousel from '../components/WorkoutCarousel.vue';

const currentDate = new Date();

const selectedWorkout = ref('');
const showWorkoutDetailsModal = ref(false);
const selectedWorkoutDetails = ref('');
const showModal = ref(false);
const selectedCategory = ref('');
const selectedWorkoutContent = ref('');

const getDayDate = computed(() => {
  // array to hold the formatted dates
  const formattedDates = [];

  // calculate the day of the week for the current date
  const currentDayOfWeek = currentDate.getDay();

  // calculate the date for the first day of the current week
  const firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(currentDate.getDate() - currentDayOfWeek);

  // loop through the days of the week
  for (let i = 0; i < daysOfWeek.length; i++) {
    // calculate the date for each day by adding the offset to the first day of the week
    const dayDate = new Date(firstDayOfWeek);
    dayDate.setDate(firstDayOfWeek.getDate() + i);

    // format the date as MM/DD
    const formattedDate = `${String(dayDate.getMonth() + 1).padStart(2, '0')}/${String(dayDate.getDate()).padStart(2, '0')}`;

    formattedDates.push(formattedDate);
  }

  return formattedDates;
});

// might have to change _ to category later on when logic added
const getSavedWorkoutsByCategory = (_: string): string[] => {
  // logic to retrieve saved workouts for the category
  // will have to access the users saved workouts to display them and their respective categories
  // placeholder array
  return ['Saved workout 1', 'Saved workout 2'];
};


const showWorkoutDetails = (workout: string) => {
  selectedWorkoutDetails.value = workout;
  showWorkoutDetailsModal.value = true;
};

const closeWorkoutDetailsModal = () => {
  showWorkoutDetailsModal.value = false;
};



// might have to change _ to index when logic is added
const showSaveModal = (workout: string) => {
  selectedWorkout.value = workout;
  selectedWorkoutContent.value = workout;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveWorkout = () => {
  // Logic to save workout to the user and its selected category.
  showModal.value = false;
};

// default workout type
const selectedWorkoutType = ref('Arms');

// create more workout types, starting types for now
const workoutTypes = ['Arms', 'Legs', 'Chest', 'Back'];

// const generateWorkoutLabel = computed(() => `Generate ${selectedWorkoutType.value} Workout`);

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// array to track off days (initially set to false (green background)
const offDays = ref([false, false, false, false, false, false, false]);

// array to store users workouts for each day separately
const workouts = ref(Array.from({ length: daysOfWeek.length }, () => Array(5).fill('')));

// function to toggle a day between on days and off days
const toggleDay = (index: number) => {
  offDays.value[index] = !offDays.value[index];
};

// default day
const selectedDay = ref('Sunday');

const generateWorkout = () => {
  // get the selected workout type and day

  // const workoutType = selectedWorkoutType.value;
  // const day = selectedDay.value;

  // generate the workout based on the selected type and day
  // implement your workout generation logic here
};


</script>


<!-- ADD A SMALL "KEY" RIGHT ABOVE THE WORKOUT CALENDER THAT INDICATES IF THE USER CLICKS ON A DAY THE COLOR WILL CHANGE SO THEY CAN MARK IT AS AN OFF DAY. 
  I ALSO WANT TO MAKE THE CHANGE SO THAT WHEN THE USER DOES CLICK THE DAY, ALONG WITH THE COLOR OF THE DAY BECOMING RED,  GREY OUT ALL OF THE INPUTS FOR THAT DAY SO THE USER CAN'T TYPE IN THEM. -->
  <!--  IN SAVE MODAL MESS WITH BACKGROUND OPACITY AND SIZING/POSITIONING INSIDE THE MODAL -->
<!-- MAKE WORKOUT TYPE AND DAY BE ON THE SAME LINE ABOVE THE GENERATE BUTTON FOR SPACING PURPOSES -->

<!-- WHEN MAKING FUTURISITIC STYLE, MAKE IT SO THE 2 MAIN COLORS MORPH TOGETHER A LOT AND HAVE SORT OF ANIMATIONS, SO UNDERLINES, BORDERS, BACKGROUNDS AREN'T JUST STATIC -->




<template>
  <div class="">
    <Nav />
    <div class="mainWorkoutCal">
    <h1 class="text-2xl text-center font-bold mb-4 headerText">User's Schedule/Workout Calendar</h1>

<!-- BELOW THIS IS THE DAYS, WORKOUT, AND GENERATE BUTTON FOR MOBILE VIEW -->
    <!-- Dropdown menu to select workout type -->
    <select v-model="selectedWorkoutType" class="p-2 rounded mb-2 md:hidden">
      <option v-for="(type, index) in workoutTypes" :key="index" :value="type">{{ type }}</option>
    </select>

    <!-- Dropdown menu to select the day -->
    <select v-model="selectedDay" class="p-2 rounded mb-2 md:hidden">
      <option v-for="day in daysOfWeek" :key="day" :value="day">{{ day }}</option>
    </select>

    <!-- Workout Generator Button -->
        <button
      @click="generateWorkout"
      class="generateBtn text-white p-2 rounded mb-4 md:hidden"
    >
      Generate {{ selectedWorkoutType }} Workout for {{ selectedDay }}
    </button>
  <!-- ABOVE THIS IS THE DAYS, WORKOUT, AND GENERATE BUTTON FOR MOBILE VIEW -->

   <!-- Days of the week with buttons to toggle background color and input areas -->
   <div class="flex flex-col md:flex-row md:grid md:grid-cols-7 gap-4 mb-4">
      <div v-for="(day, index) in daysOfWeek" :key="day" class="text-center">
        <div
          :class="{ 'onBg': !offDays[index], 'bg-red-500': offDays[index] }"
          class="mb-2 p-2 cursor-pointer rounded"
          @click="toggleDay(index)"
        >
          {{ day }}
          {{ getDayDate[index] }}
        </div>
        <div>
          <input
            v-for="workoutIndex in 5"
            :key="workoutIndex"
            v-model="workouts[index][workoutIndex - 1]"
            class="w-full p-2 border rounded mb-2"
            placeholder="Enter your workout..."
          />
        </div>
      </div>
    </div>

    <!-- Save buttons for each day -->
    <div class="grid grid-cols-7 gap-4 mb-4">
      <div v-for="(day, index) in daysOfWeek" :key="day" class="text-center">
        <div class="mb-2">
          <button @click="showSaveModal(getSavedWorkoutsByCategory(selectedWorkoutType)[index])" class="saveBtn text-white p-2 rounded">
            Save Workout
          </button>
        </div>
      </div>
    </div>


    <!-- Categories and saved workouts section -->
    <div class="mb-4">
      <h2 class="headerText text-center font-bold mb-2 text-lg">Workout Categories</h2>
      <div class="flex space-x-4 text-center">
        <!-- Display workout categories -->
        <div v-for="(type, typeIndex) in workoutTypes" :key="typeIndex" class="flex-1">
          <h3 class="workoutType text-lg font-bold">{{ type }}</h3>
          <ul>
            <!-- Display saved workouts for each category -->
            <li v-for="(workout, workoutIndex) in getSavedWorkoutsByCategory(type)" :key="workoutIndex" class="workout">
              <button @click="showWorkoutDetails(workout)" class="workoutButton">
                {{ workout }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Workout details modal -->
    <div v-if="showWorkoutDetailsModal" class="fixed top-0 left-0 w-full h-full bgColor bg-opacity-50 flex items-center justify-center">
      <div class="bgModal p-4 rounded">
        <h2 class="text-xl text-white font-bold mb-2">Workout Details</h2>
        <p class="text-white">{{ selectedWorkoutDetails }}</p>
        <button @click="closeWorkoutDetailsModal" class="bg-red-500 text-white p-2 rounded ml-2">
          Close
        </button>
      </div>
    </div>



    <!-- Save modal -->
    <div v-if="showModal" class="fixed top-0 left-0 w-full h-full bgColor bg-opacity-50 flex items-center justify-center">
      <div class="bgModal p-4 rounded">
        <h2 class="text-xl text-white font-bold mb-2">Selected Workout</h2>
        <p class="text-white">{{ selectedWorkoutContent }}</p>
        <select v-model="selectedCategory" class="p-2 rounded mb-2">
          <option v-for="(type, index) in workoutTypes" :key="index" :value="type">{{ type }}</option>
        </select>
        <button @click="saveWorkout" class="saveBtn text-white p-2 rounded">
          Save
        </button>
        <button @click="closeModal" class="bg-red-500 text-white p-2 rounded ml-2">
          Cancel
        </button>
      </div>
    </div>

    
<!-- BELOW THIS IS THE DAYS, WORKOUT, AND GENERATE BUTTON FOR NORMAL VIEW -->
    <!-- Dropdown menu to select workout type -->
    <select v-model="selectedWorkoutType" class="p-2 rounded mb-2 hidden md:block">
      <option v-for="(type, index) in workoutTypes" :key="index" :value="type">{{ type }}</option>
    </select>

    <!-- Dropdown menu to select the day -->
    <select v-model="selectedDay" class="p-2 rounded mb-2 hidden md:block">
      <option v-for="day in daysOfWeek" :key="day" :value="day">{{ day }}</option>
    </select>

    <!-- Workout Generator Button (Visible on LG and MD screens) -->
    <button
      @click="generateWorkout"
      class="text-white p-2 rounded hidden md:block generateBtn"
    >
      Generate {{ selectedWorkoutType }} Workout for {{ selectedDay }}
    </button>
<!-- ABOVE THIS IS THE DAYS, WORKOUT, AND GENERATE BUTTON FOR NORMAL VIEW -->

<div class="workoutCar">
      <WorkoutCarousel />
    </div>



    </div>
  </div>
</template>


<style scoped>

.mainWorkoutCal {
  background: #2d2d2d;
  /* height: 100vh; */
}

.headerText {
  /* color: #A3FDA1; */
  color: #925ff0;
}

select {
  background-color: #925ff0;
  color: white;
  border: 2px solid #A3FDA1;
}

.generateBtn {
  background-color: #925ff0;
  border: 2px solid #A3FDA1;
}

.saveBtn {
  background-color: #A3FDA1;
  color: #2d2d2d;
  border: 2px solid #925ff0;
}

input {
  background-color: #925ff0;
  color: #2d2d2d;
}

.bgColor {
  background-color: #925ff0;
}

.onBg {
  background-color: #A3FDA1;
}

.bgModal {
  background-color: #2d2d2d;
}

.workoutType {
  color: #A3FDA1;
  border-bottom: 2px solid #925ff0;
}

.workout {
  color: white;
}

.workout:hover {
  color: #A3FDA1;
  cursor: pointer;
}

</style>