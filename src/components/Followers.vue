<script setup lang="ts">
import { ref, computed } from 'vue';

// replace this with your actual data
const followers = [
  { id: 1, name: 'Follower 1' },
  { id: 2, name: 'Follower 2' },
  { id: 3, name: 'Follower 3' },
  // add more followers as needed to see modal is scrollable
];

const totalFollowers = ref(followers.length);
const isModalVisible = ref(false);
const searchQuery = ref('');

const filteredFollowers = computed(() => {
  return followers.filter((follower) =>
    follower.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const toggleFollowerList = () => {
  isModalVisible.value = !isModalVisible.value;
};
</script>


<template>
  <div class="">
    <p>Follower List</p>

    <!-- display the number of followers -->
    <p>Total Followers: {{ totalFollowers }}</p>

    <!-- button to open/close the modal -->
    <button class="viewFollowersBtn" @click="toggleFollowerList">
      {{ isModalVisible ? 'Close Followers' : 'View Followers' }}
    </button>

    <!-- modal to display followers -->
    <div v-if="isModalVisible">
      <!-- search bar -->
      <input v-model="searchQuery" placeholder="Search followers">

      <!-- list of followers -->
      <ul>
        <li v-for="follower in filteredFollowers" :key="follower.id">
          {{ follower.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.viewFollowersBtn {
  background-color: purple;
  border: 1px solid limegreen;
  margin: 5px;
  cursor: pointer;
}

</style>