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

<!-- NEXT I WANT TO MAKE IT SO THEIR IS A BUTTON THE USER CLICKS TO ADD THE GOAL INSTEAD OF PRESSING ENTER. -->

<template>
  <div>
    <h1>User's Goals (5 GOALS MAX) (PRESS ENTER WHEN YOU TYPE GOAL)</h1>
    <div>
      <button @click="addGoal" class="bg-blue-500 text-white p-2">Add Goal</button>
    </div>
    <div class="flex flex-wrap justify-center">
      <div v-for="(goal, index) in goals" :key="index" class="p-2">
        <div class="goal-box">
          <input v-if="goal.editing" v-model="goal.text" @keyup.enter="saveGoal(index)" @keyup.esc="cancelEdit(index)" class="goalInput">
          <span v-else class="goalText">{{ goal.text }}</span>
          <button @click="editGoal(index)" v-if="!goal.editing" class="editButton">Edit</button>
          <button @click="deleteGoal(index)" class="deleteButton">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

.goalInput {
  border: 1px solid blue;
}

.editButton {
  margin-left: 5px;
  margin-right: 5px;
  background: green;
}

.deleteButton {
  margin-left: 5px;
  margin-right: 5px;
  background: red;
}

.goalText {
  background-color: yellow;
}

</style>