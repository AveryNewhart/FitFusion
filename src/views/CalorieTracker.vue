<script setup lang="ts">

// STYLE THE SIZE AND POSITIONING OF THE FOOD AND CALORIES WHEN THE USER ADDS THEM, DECIDE WHERE TO PUT THE TABLE.


// <!-- SAVE THE WEEKLY TOTAL CALORIES TO THE USER SO THEY CAN SEE THEIR TOP WEEK, TOP MONTH, ETC... THIS WILL BE DONE WHEN BACKEND IS COMPLETED FOR THE USER-->

import Nav from '../components/Nav.vue';

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


</script>

<!-- STYLE THE WAY THE FOOD AND CALORIES SHOW UP ONCE ADDED -->

<!-- POTENTIAL ADDS: -->
<!-- HAVE A CHART? FOR THE MONTH. MAYBE A TAB TO SWITCH BETWEEN THE TWO, OR EVEN JUST UNDER THE CALORIE TRACKER CONTENT.  -->

<template>
  <div>
    <Nav />
    <div class="calories-tracker">
      <h1 class="trackH1 text-xl font-bold">Track Your Calories</h1>
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
            <td class="dayBg font-bold">{{ day }}</td>
            <td class="borderG"><input type="text" v-model="foods[index]" placeholder="Food" class="inputBg"></td>
            <td class="borderG"><input type="number" v-model="calories[index]" placeholder="Calories" class="inputBg"></td>
            <td class="borderG">
              <button @click="addCaloriesEntry(day)" class="addBtn">Add</button>
            </td>
            <td class="borderG relative">
              <div class="caloriesCircle"></div>
                <p class="caloriesText">{{ totalCaloriesPerDay[index] }}</p>
            </td>
            <td class="borderG">
              <button @click="resetDay(day)" class="bg-red-500 resetBtn">Reset</button>
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
      <div class="totalWeekDiv">
        <h2 class="weekH1">Total Calories for the Week:<span class="calorieSpan"> {{ totalCalories }}</span></h2>
        <button @click="resetWeek" class="bg-red-500">Reset Week</button>
      </div>
    </div>
  </div>
</template>




<style scoped>
.calories-tracker {
  text-align: center;
  background-color: #2d2d2d;
  height: 100vh;
}

.trackH1 {
  color: #a3fda1;
  margin-bottom: 15px;
}

.borderG {
  border: 3px solid #a3fda1;
}

table {
  border-collapse: collapse;
  width: 100%;
}

thead,  .dayBg{
  background-color: #925ff0;
  color: white;
  border: 3px solid #a3fda1;
}

thead th {
  padding: 10px;
  border-right: 3px solid #a3fda1;
}

.caloriesCircle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #925ff0; 
}

.caloriesText {
  position: relative; 
  z-index: 1; 
  color: white;
}

.inputBg {
  background-color: #a3fda1;
  border: 3px solid #925ff0;
  color: #2d2d2d;
  border-radius: 5px;
  padding: 5px;
}

tbody td {
  border: 1px solid #ddd;
  padding: 10px;
}

button {
  padding: 10px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}

.addBtn {
  background-color: #a3fda1;
  color: #2d2d2d;
  border: 2px solid #925ff0;
}

.addBtn:hover {
  background-color: #925ff0;
  color: white;
  border: 2px solid #a3fda1;
}

.resetBtn:hover {
  background-color: #2d2d2d;
  color: #f56565;
  border: solid #f56565;
}

.totalWeekDiv {
  margin-top: 25px;
}

.weekH1 {
  color: #925ff0;
  margin-bottom: 15px;
}

.calorieSpan {
  color: #a3fda1;
}
</style>





