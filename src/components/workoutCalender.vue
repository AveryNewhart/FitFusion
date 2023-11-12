<script setup lang="ts">
import { ref, computed } from 'vue';

const currentDate = new Date();

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

// default workout type
const selectedWorkoutType = ref('Arms');

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


<!-- NEXT TASK IS TO CREATE THE FUNCTIONS FOR EACH WORKOUT THAT CAN BE GENERATED. -->
<!-- EACH WORKOUT WILL HAVE A POOL OF WORKOUTS FOR THAT TYPE THAT WILL HAVE 5 WORKOUTS TO BE PICKED FROM THERE AT RANDOM -->
<!-- THE 5 RANDOM WORKOUTS FOR THAT TYPE WILL GO INTO THE 5 INPUT FIELDS FOR THE DAY SELECTED -->

<!-- USER SHOULD BE ABLE TO SAVE WORKOUTS TO THE RESPECTIVE CATEGORIES, EX SAVING A WORKOUT THAT IS FOR ARMS TO THE ARM CATEGORY. -->
<!-- ON THE BACKEND THE USER WILL HAVE TO HAVE WORKOUTS SAVE TO THEM. -->

<!-- WHEN IT BECOMES MOBILE VIEW ON THIS PAGE, HAVE THE DAYS GO INTO A COLUMN STACK AND THE WORKOUT GENERATOR BUTTON AND SUCH SHOULD GO ABOVE THE DAYS SO THE USER DOESN'T HAVE TO SCROLL ALL THE WAY TO THE BUTTON TO SEE IT. -->


<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">User's Schedule/Workout Calendar</h1>

    <!-- Days of the week with buttons to toggle background color and input areas -->
    <div class="grid grid-cols-7 gap-4 mb-4">
      <div v-for="(day, index) in daysOfWeek" :key="day" class="text-center">
        <div
          :class="{ 'bg-green-500': !offDays[index], 'bg-red-500': offDays[index] }"
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


    <!-- WILL HAVE TO FURTHER INVESTIGATE WHY THE RED > . CODE STILL WORKS BUT ODD ERROR WHILE TYPING CODE -->

    <!-- Dropdown menu to select workout type -->
    <select v-model="selectedWorkoutType" class="p-2 rounded mb-2">
      <option v-for="type in workoutTypes" :key="type" :value="type">{{ type }}</option>
    </select>

    <!-- Dropdown menu to select the day -->
    <select v-model="selectedDay" class="p-2 rounded mb-2">
      <option v-for="day in daysOfWeek" :key="day" :value="day">{{ day }}</option>
    </select>

    <!-- Generate Workout button with dynamic label -->
    <button @click="generateWorkout" class="bg-blue-500 text-white p-2 rounded">
      Generate {{ selectedWorkoutType }} Workout for {{ selectedDay }}
    </button>

  </div>
</template>


<style scoped>
</style>