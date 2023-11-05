<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Goal {
  text: string;
  editing: boolean;
}

const goals = ref<Goal[]>([]);
const maxGoals = 5;

const addGoal = () => {
  if (goals.value.length < maxGoals) {
    goals.value.push({ text: '', editing: true });
  }
};

const editGoal = (index: number) => {
  goals.value[index].editing = true;
};

const saveGoal = (index: number) => {
  goals.value[index].editing = false;
};

const cancelEdit = (index: number) => {
  goals.value[index].editing = false;
};

const deleteGoal = (index: number) => {
  goals.value.splice(index, 1);
};

onMounted(() => {
});
</script>




<!-- I WANT TO MAKE IT SO THE USER HAS A PLACE TO WRITE 1-5 OF THEIR TOP GOALS -->
<!-- IT SHOULD START BLANK WITH JUST A BUTTON THAT SAYS "ADD GOAL" -->
<!-- WHEN THE USER SELECTS THE BUTTON, AN INPUT SHOULD DISPLAY, OR A MODAL THAT ALLOWS THE USER TO INPUT THEIR GOAL AND THEN THAT GOAL IS ADDED TO THE SECTION WITH AN EDIT AND A DELETE BUTTON -->
<!-- THE USER SHOULD BE ABLE TO LIST UP TO FIVE GOALS ONLY -->
<!-- IS A PROGRESS BAR POSSIBLE -->

<!-- NEXT I WANT TO MAKE EACH GOAL A BOX IN A ROW, WITH THEM BEING CENTERED. -->

<template>
  <div>
    <h1>User's Goals</h1>
    <div>
      <button @click="addGoal" class="bg-blue-500 text-white p-2">Add Goal</button>
    </div>
    <ul>
      <li v-for="(goal, index) in goals" :key="index">
        <input v-if="goal.editing" v-model="goal.text" @keyup.enter="saveGoal(index)" @keyup.esc="cancelEdit(index)" class="goalInput">
        <span v-else>{{ goal.text }}</span>
        <button @click="editGoal(index)" v-if="!goal.editing">Edit</button>
        <button @click="deleteGoal(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>


<style scoped>

.goalInput {
  border: 1px solid blue;
}

</style>