<script setup lang="ts">

import Nav from './/Nav.vue';

import { ref } from 'vue';


const foods = ref<string[]>(Array(7).fill(''));
const calories = ref<number[]>(Array(7).fill(0));
const totalCaloriesPerDay = ref<number[]>(Array(7).fill(0));
const totalCalories = ref(0);
const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const addCaloriesEntry = (index: number): void => {
  const caloriesValue: number = parseInt(calories.value[index].toString(), 10);
  if (!isNaN(caloriesValue)) {
    totalCaloriesPerDay.value[index] += caloriesValue;
  }
};

const calculateTotalCalories = (): void => {
  totalCalories.value = totalCaloriesPerDay.value.reduce((acc, value) => acc + value, 0);
};
</script>

<!-- I WANT TO ADD A ADDITIONAL SPOT FOR THE USER TO ENTER THEIR FOOD, TO ALIGN IT WITH THE AMOUNT OF CALORIES IT IS. -->

<!-- ADDITIONALLY I WANT TO MAYBE HAVE AN API EVEN FOR FOOD AND THEIR CALORIES SO THE USER CAN SEARCH A FOOD AND THE CALORIES ARE AUTOMATICALLY ASSOCIATED WITH THE FOOD -->

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
          </tr>
        </thead>
        <tbody>
          <tr v-for="(day, index) in days" :key="index">
            <td>{{ day }}</td>
            <td><input type="text" v-model="foods[index]" placeholder="Food"></td>
            <td><input type="number" v-model="calories[index]" placeholder="Calories"></td>
            <td>
              <button @click="addCaloriesEntry(index)">Add</button>
            </td>
            <td>{{ totalCaloriesPerDay[index] }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="calculateTotalCalories">Total Calories</button>
      <p>Total Calories for the Week: {{ totalCalories }}</p>
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





