<script setup lang="ts">
import { ref, computed } from 'vue';

// replace this with your actual data
const followers = [
  { id: 1, name: 'Avery' },
  { id: 2, name: 'Paul' },
  { id: 3, name: 'Fred' },
  { id: 4, name: 'Ryder' },
  { id: 5, name: 'Rella' },
  { id: 6, name: 'Tiny' },
  { id: 7, name: 'Diego' },
  { id: 8, name: 'Riley' },
  { id: 9, name: 'Alex' },
  { id: 10, name: 'Drew' },
  { id: 11, name: 'Cindy' },
  { id: 12, name: 'Mike' },
  { id: 13, name: 'Stormy' },
  { id: 14, name: 'Odie' },
  { id: 15, name: 'Stripes' },
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

    <!-- display the number of followers -->
    <p class="followerP">Followers: <span class="followerSpan">{{ totalFollowers }}</span></p>

    <!-- button to open/close the modal -->
    <button class="viewFollowersBtn" @click="toggleFollowerList">
      {{ isModalVisible ? 'Close' : 'View' }}
    </button>

    <!-- modal to display followers -->
    <div v-if="isModalVisible" class="modal-overlay">
      <div class="modal">
        <!-- Close button with 'x' -->
        <button class="closeBtn" @click="toggleFollowerList">x</button>

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
  </div>
</template>

<style scoped>

.viewFollowersBtn {
  background-color: #925ff0;
  border: 2px solid #A3FDA1;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  color: #2d2d2d;
  font-weight: bold;
}

.followerP {
  color: #A3FDA1;
}

.followerSpan {
  color: #925ff0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-height: 40vh; /*  maximum height for the modal */
  overflow-y: auto; /* vertical scrolling for when there are a lot of followers */
  position: relative;
  scroll-behavior: smooth;
}

.closeBtn {
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

</style>