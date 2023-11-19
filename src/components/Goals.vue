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

const addGoal = () => {
  if (newGoalTitle.value && newGoalDescription.value && goals.value.length < maxGoals) {
    goals.value.push({
      title: newGoalTitle.value,
      description: newGoalDescription.value,
      editing: false,
    });
    newGoalTitle.value = '';
    newGoalDescription.value = '';
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

<!-- MAKE IT SO THE "ADD GOAL" BUTTON IS ONLY VIEWABLE ON THE USERS OWN PROFILE. 
  IF ON ANOTHER USERS PROFILE, HAVE JUST THE USERS GOALS, THE ADD GOAL BUTTON SHOULDN'T BE THERE BECAUSE WHY BE ABLE TO ADD GOALS TO SOME OTHER USERS PROFILE. -->

  <!-- MAKE IT SO FOR ALL THE GOALS THERE IS JUST ONE EDIT BUTTON. ONCE THAT BUTTON IS CLICKED, A SAVE BUTTON WILL POP UP FOR THE USER TO SAVE WHAT THEY EDIT.  -->
  <!-- ONCE THE EDIT BUTTON IS CLICKED, THE GOALS AND THEIR INPUTS WILL BECOME EDITABLE. SORT OF LIKE HOW IT IS NOW, BUT MAKE IT SO ONLY ONE BUTTON. -->

  <!-- MAKE IT SO THE INPUT FIELDS ARENT THERE AT FIRST. MAKE IT SO WHEN THE USER CLICKS THE BUTTON TO ADD A GOAL, A MODAL POPS UP WITH A TITLE AND DESCRIPTION INPUTS FOR THE USER TO ENTER THEIR GOAL -->

  <template>
    <div>
      <h1 class="text-white">User's Goals (5 GOALS MAX)</h1>
      <div>
        <input v-model="newGoalTitle" class="goalInput" placeholder="enter a goal title..." />
        <textarea v-model="newGoalDescription" class="goalInput" placeholder="enter a goal description..."></textarea>
        <button @click="addGoal" class="addGoalBtn rounded p-2">Add Goal</button>
      </div>
      <div class="flex flex-wrap justify-center">
        <div v-for="(goal, index) in goals" :key="index" class="p-2">
          <div class="goal-box">
            <div v-if="goal.editing">
              <input v-model="goal.title" class="goalInput" placeholder="enter a goal title..." />
              <textarea v-model="goal.description" class="goalInput" placeholder="enter a goal description..."></textarea>
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