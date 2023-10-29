<script setup lang="ts">

import Nav from './/Nav.vue';

import { ref } from 'vue';

const caloriesConsumed = ref();
const calorieEntries = ref<number[]>([]);
const totalCalories = ref(0);

const addCaloriesEntry = () => {
  const calories = parseInt(caloriesConsumed.value as string, 10);
  if (!isNaN(calories)) {
    calorieEntries.value.push(calories);
    totalCalories.value += calories;
    caloriesConsumed.value = 0;
  }
};

</script>

<!-- I WANT TO ADD A ADDITIONAL SPOT FOR THE USER TO ENTER THEIR FOOD, TO ALIGN IT WITH THE AMOUNT OF CALORIES IT IS. -->

<!-- ADDITIONALLY I WANT TO MAYBE HAVE AN API EVEN FOR FOOD AND THEIR CALORIES SO THE USER CAN SEARCH A FOOD AND THE CALORIES ARE AUTOMATICALLY ASSOCIATED WITH THE FOOD -->

<template>
  <div>
    <Nav />
    <div class="calories-tracker">
      <h1>Track Your Calories</h1>
      <div class="calories-input">
        <input type="number" v-model="caloriesConsumed" placeholder="Enter calories">
        <button @click="addCaloriesEntry">Add</button>
      </div>
      <ul>
        <li v-for="(entry, index) in calorieEntries" :key="index">
          {{ entry }} calories
        </li>
      </ul>
      <p>Total Calories: {{ totalCalories }}</p>
    </div>
  </div>
</template>

<style scoped>

.calories-tracker {
  text-align: center;
}

.calories-input {
  margin: 20px 0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

</style>