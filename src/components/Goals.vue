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

const showEditModal = ref(false);

const saveAllGoals = () => {
  showEditModal.value = false; // Close the modal after saving goals
};

const addGoal = () => {
  if (newGoalTitle.value && newGoalDescription.value && goals.value.length < maxGoals) {
    goals.value.push({
      title: newGoalTitle.value,
      description: newGoalDescription.value,
      editing: false,
    });
    newGoalTitle.value = '';
    newGoalDescription.value = '';
    showModal.value = false; // close the modal after adding a goal
  }
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

<!-- REMOVE THE X FROM THE MODAL THAT OPENS TO EDIT GOALS -->

<!-- MAKE AN OPTION TO ADD A PROGRESS BAR OR SOMETHING FOR THE USER TO TRACK THEIR GOAL PROGRESS -->

<!-- SET A MAX WIDTH OR JUST A WIDTH AND TEXT WRAP OF SOME SORT TO THE GOALS WHEN THEY ARE DISPLAYED. -->

  <template>
    <div>
      <h1 class="text-white">User's Goals (5 GOALS MAX)</h1>
      <div>
        <button @click="showModal = true" class="addGoalBtn rounded p-2">Add Goal</button>
        <button @click="showEditModal = true" class="editButton rounded p-2">Edit Goals</button>
      </div>
      <div class="flex flex-wrap justify-center">
        <div v-for="(goal, index) in goals" :key="index" class="p-2">
          <div class="goal-box">
            <div class="goal-number">{{ index + 1 }}</div>
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
            <div class="widthForGoals" v-else>
              <h3 class="goalTitle">{{ goal.title }}</h3>
              <p class="goalDescription">{{ goal.description }}</p>
              <!-- <button @click="editGoal(index)" class="editButton rounded">Edit</button>
              <button @click="deleteGoal(index)" class="deleteButton rounded">Delete</button> -->
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

      <!-- Modal for editing goals -->
      <div v-if="showEditModal" class="modal">
        <div class="modal-content">
          <span @click="showEditModal = false" class="close">&times;</span>
          <div v-for="(goal, index) in goals" :key="index" class="goal-box">
          <div>
            <input v-model="goal.title" class="goalInput" placeholder="enter a goal title..." />
            <textarea v-model="goal.description" class="goalInput" placeholder="enter a goal description..."></textarea>
          </div>
          <button @click="deleteGoal(index)" class="deleteButton rounded">Delete</button>
        </div>
        <button @click="saveAllGoals" class="addGoalBtn rounded p-2">Save Goals</button>
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

/* .widthForGoals {
  max-width: 50px;
} */

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

.goal-box {
  position: relative;
}

.goal-number {
  background-color: #925ff0;
  color: #fff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.8em;
}

</style>