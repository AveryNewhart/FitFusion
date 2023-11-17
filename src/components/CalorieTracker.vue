<script setup lang="ts">

import Nav from './/Nav.vue';

import { ref } from 'vue';


const foods = ref<string[]>(Array(7).fill(''));
const calories = ref<number[]>(Array(7).fill(0));
const totalCaloriesPerDay = ref<number[]>(Array(7).fill(0));
const totalCalories = ref(0);
const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

interface Entry {
  food: string;
  calories: number;
}

const entries = ref<{ [key: string]: Entry[] }>(
  days.reduce((acc, day) => {
    acc[day] = [];
    return acc;
  }, {} as { [key: string]: Entry[] })
);

const addCaloriesEntry = (day: string): void => {
  const index = days.indexOf(day);
  const caloriesValue: number = parseInt(calories.value[index].toString(), 10);
  if (!isNaN(caloriesValue)) {
    totalCalories.value += caloriesValue; // update total calories for the week
    entries.value[day].push({ food: foods.value[index], calories: caloriesValue });
  }
};

const resetDay = (day: string): void => {
  const index = days.indexOf(day);
  totalCalories.value -= totalCaloriesPerDay.value[index];
  totalCaloriesPerDay.value[index] = 0;
  entries.value[day] = [];
};

const resetWeek = (): void => {
  totalCalories.value = 0;
  totalCaloriesPerDay.value.fill(0);
  entries.value = days.reduce((acc, day) => {
    acc[day] = [];
    return acc;
  }, {} as { [key: string]: Entry[] });
};

const calculateTotalCalories = (): void => {
  // leave empty, dont need to itterate over the array again
};

</script>

<!-- GET TOTAL CALORIES TO BE THE TOTAL SUM OF ALL THE DAYS OF THE WEEK AT ALL TIMES, SO THE USER CAN SEE THE TOTAL FOR THE WEEK TOO -->

<!-- SAVE THE WEEKLY TOTAL CALORIES TO THE USER SO THEY CAN SEE THEIR TOP WEEK, TOP MONTH, ETC... THIS WILL BE DONE WHEN BACKEND IS COMPLETED FOR THE USER-->

<!-- POTENTIAL ADDS: -->
<!-- HAVE A CHART? FOR THE MONTH. MAYBE A TAB TO SWITCH BETWEEN THE TWO, OR EVEN JUST UNDER THE CALORIE TRACKER CONTENT.  -->

<template>
  <div>
    <Nav />
    <div class="calories-tracker">
      <h1>Track Your Calories</h1>
      <table class="w-full">
        <thead>
          <tr>
            <th>Day</th>
            <th>Food</th>
            <th>Calories</th>
            <th>Add</th>
            <th>Total Calories</th>
            <th>Reset</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(day, index) in days" :key="index">
            <td>{{ day }}</td>
            <td><input type="text" v-model="foods[index]" placeholder="Food"></td>
            <td><input type="number" v-model="calories[index]" placeholder="Calories"></td>
            <td>
              <button @click="addCaloriesEntry(day)">Add</button>
            </td>
            <td>{{ totalCaloriesPerDay[index] }}</td>
            <td>
              <button @click="resetDay(day)">Reset</button>
            </td>
            <tr v-for="(entry, entryIndex) in entries[day]" :key="entryIndex">
              <td></td>
              <td>{{ entry.food }}</td>
              <td>{{ entry.calories }}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tr>
        </tbody>
      </table>
      <button @click="calculateTotalCalories">Total Calories</button>
      <p>Total Calories for the Week: {{ totalCalories }}</p>
      <button @click="resetWeek">Reset Week</button>
    </div>
  </div>
</template>




<style scoped>
.calories-tracker {
  text-align: center;
}

table {
  border-collapse: collapse;
  width: 100%;
}

thead {
  background-color: #333;
  color: white;
}

thead th {
  padding: 10px;
}

tbody td {
  border: 1px solid #ddd;
  padding: 10px;
}

button {
  padding: 10px;
  background-color: #333;
  color: white;
  cursor: pointer;
  border: none;
}

p {
  margin-top: 20px;
}
</style>





