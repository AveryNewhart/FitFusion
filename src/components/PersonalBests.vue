<script setup lang="ts">
import { ref, Ref, ComputedRef, computed } from 'vue';

// interface for personal best
interface PersonalBest {
  type: string;
  value: number;
  visible: boolean;
  isEditing: boolean;
}

const personalBests: Ref<PersonalBest[]> = ref([
// example personal best entries
// the types are what the personal bests are 
  { type: 'Bench Press', value: 200, visible: true, isEditing: false },
  { type: 'Squat', value: 300, visible: true, isEditing: false },
]);

const isEditModalOpen = ref(false);
const editingPersonalBest: Ref<PersonalBest | null> = ref(null);

const selectedPersonalBests: ComputedRef<PersonalBest[]> = computed(() =>
  personalBests.value.filter((pb) => pb.visible)
);

const openEditModal = () => {
  isEditModalOpen.value = true;
};

const editPersonalBest = (personalBest: PersonalBest) => {
    // create a copy for editing
  editingPersonalBest.value = { ...personalBest };
};

const savePersonalBest = (editedPersonalBest: PersonalBest) => {
// logic for saving personal best to the backend
// this is subject to change. starting functionality. 
  if (editingPersonalBest.value) {
    editingPersonalBest.value = Object.assign({}, editingPersonalBest.value, editedPersonalBest);
    editingPersonalBest.value = null; 
  }
};

const cancelEditModal = () => {
  // logic for canceling the edit operation
  editingPersonalBest.value = null; // clears the editing state
  isEditModalOpen.value = false;
};

</script>

<!-- PLACEHOLDERS/BASIC SETUP CREATED -->

<!-- NEED TO ADD IN ALL THE THINGS THE USER CAN SET AS PERSONAL BESTS -->

<!-- STYLE THE INPUT BOXES AND BUTTONS -->

<!-- HAVE TO STILL HAVE WHAT THE USER ENTERS IN THE INPUT BOX UPDATE THEIR PERSONAL BESTS, ITS ALL PLACEHOLDERS RIGHT NOW -->

<!-- BE SURE WHEN CREATING USER ON BACKEND, THEY HAVE ALL OF THE DIFFERENT WORKOUTS THAT A USER CAN SET A PERSONAL BEST TO. -->


<template>
    <div>
      <h3>Personal Bests Section</h3>
      <button class="mainEdit p-1" @click="openEditModal">Edit Personal Bests</button>
  
      <!-- modal for editing personal bests -->
      <div v-if="isEditModalOpen">
        <div v-for="personalBest in personalBests" :key="personalBest.type">
          <label>
            <input type="checkbox" v-model="personalBest.visible" />
            {{ personalBest.type }}
          </label>
          <button class="PrEditBtn" @click="editPersonalBest(personalBest)">Edit</button>
        </div>
  
        <div v-if="editingPersonalBest">
          <input class="editInput" v-model="editingPersonalBest.value" />
  
          <button class="saveBtn" @click="savePersonalBest(editingPersonalBest)">Save</button>
          <button class="closeBtn" @click="cancelEditModal">Cancel</button>
        </div>
        <button class="closeBtn" @click="cancelEditModal">Close</button>
      </div>
  
      <!-- display selected personal bests -->
      <div v-for="personalBest in selectedPersonalBests" :key="personalBest.type">
        <!-- display personal best information -->
        <div>
          <span>{{ personalBest.type }}:</span>
          <span v-if="personalBest.visible">{{ personalBest.value }}</span>
          <span v-else>Not set</span>
        </div>
      </div>
    </div>
  </template>

<style scoped>

.mainEdit {
    border: 1px solid darkblue;
    background-color: orange;
    border-radius: 10px;
}

.editInput {
    border: 1px solid rgb(173, 35, 4);
}

.PrEditBtn {
    margin-left: 10px;
    border: 1px solid purple;
    background-color: aqua;
    border-radius: 10px;
    padding: 5px;
}

.closeBtn {
    border: 1px solid black;
    background-color: red;
    border-radius: 10px;
    padding: 5px;
}

.saveBtn {
    border: 1px solid black;
    background-color: green;
    border-radius: 10px;
    padding: 5px;
}

</style>