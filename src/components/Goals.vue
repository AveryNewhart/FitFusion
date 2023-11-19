<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Goal {
  title: string;
  description: string;
  editing: boolean;
}

const goals = ref<Goal[]>([]);
const newGoalTitle = ref('');
const newGoalDescription = ref('');
const maxGoals = 5;
const showModal = ref(false);

const addGoal = () => {
  if (newGoalTitle.value && newGoalDescription.value && goals.value.length < maxGoals) {
    goals.value.push({
      title: newGoalTitle.value,
      description: newGoalDescription.value,
      editing: false,
    });
    newGoalTitle.value = '';
    newGoalDescription.value = '';
    showModal.value = false; // Close the modal after adding a goal
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

onMounted(() => {});
</script>

<!-- MAKE IT SO THE "ADD GOAL" BUTTON IS ONLY VIEWABLE ON THE USERS OWN PROFILE. 
  IF ON ANOTHER USERS PROFILE, HAVE JUST THE USERS GOALS, THE ADD GOAL BUTTON SHOULDN'T BE THERE BECAUSE WHY BE ABLE TO ADD GOALS TO SOME OTHER USERS PROFILE. -->

<!-- NEED TO MAKE IT SO THERE IS ONE EDIT BUTTON. WHEN THE EDIT BUTTON IS CLICKED, IT OPENS A MODAL THAT HAS ALL OF THE GOALS AND THEIR TITLE AND DESCRIPTIONS AND THE INPUTS ARE EDITABLE. -->

  <template>
    <div>
      <h1 class="text-white">User's Goals (5 GOALS MAX)</h1>
      <div>
        <button @click="showModal = true" class="addGoalBtn rounded p-2">Add Goal</button>
      </div>
      <div class="flex flex-wrap justify-center">
        <div v-for="(goal, index) in goals" :key="index" class="p-2">
          <div class="goal-box">
            <div v-if="goal.editing">
              <input v-model="goal.title" class="goalInput" placeholder="enter a goal title..." />
              <textarea
                v-model="goal.description"
                class="goalInput"
                placeholder="enter a goal description..."
              ></textarea>
              <button @click="saveGoal(index)" class="editButton rounded">Save</button>
              <button @click="cancelEdit(index)" class="deleteButton rounded">Cancel</button>
            </div>
            <div v-else>
              <h3 class="goalTitle">{{ goal.title }}</h3>
              <p class="goalDescription">{{ goal.description }}</p>
              <button @click="editGoal(index)" class="editButton rounded">Edit</button>
              <button @click="deleteGoal(index)" class="deleteButton rounded">Delete</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal for adding goals -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span @click="showModal = false" class="close">&times;</span>
          <input v-model="newGoalTitle" class="goalInput" placeholder="enter a goal title..." />
          <textarea
            v-model="newGoalDescription"
            class="goalInput"
            placeholder="enter a goal description..."
          ></textarea>
          <button @click="addGoal" class="addGoalBtn rounded p-2">Add Goal</button>
        </div>
      </div>
    </div>
  </template>
  




<style scoped>

.goalTitle {
  font-size: 1.2em;
  /* margin-bottom: 5px; */
  color: #925ff0;
}

.goalDescription {
  /* margin-bottom: 10px; */
  color: white;
}

.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: #000;
}

.goalInput {
  border: 1px solid #925ff0;
  color: #925ff0;
  background-color: #a3fda1;
}

.editButton {
  margin-left: 5px;
  margin-right: 5px;
  background: #925ff0;
  padding: 2px;
}

.deleteButton {
  margin-left: 5px;
  margin-right: 5px;
  background: red;
  padding: 2px;
}

.goalText {
  background-color: yellow;
}

.addGoalBtn {
  background-color: #925ff0;
  border: 2px solid #a3fda1;
}

</style>