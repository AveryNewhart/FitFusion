<script setup lang="ts">
import { ref } from 'vue';
// import WorkoutGenerator from './WorkoutGenerator.vue';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// array to track off days (initially set to false (green background)
const offDays = ref([false, false, false, false, false, false, false]);

// array to store users workouts for each day separately
const workouts = ref(Array.from({ length: daysOfWeek.length }, () => Array(5).fill('')));

// function to toggle a day between on days and off days
const toggleDay = (index: number) => {
  offDays.value[index] = !offDays.value[index];
};

// function to generate the workout
const generateWorkout = () => {
  // workout generation logic here
};
</script>

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

    <!-- Generate Workout button -->
    <button @click="generateWorkout" class="bg-blue-500 text-white p-2 rounded">
      Generate Workout
    </button>
  </div>
</template>


<style scoped>
</style>