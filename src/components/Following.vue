<script setup lang="ts">
import { ref, computed } from 'vue';

// replace this with your actual data
const following = [
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
  // add more users as needed to see modal is scrollable
];

const totalFollowing = ref(following.length);
const isModalVisible = ref(false);
const searchQuery = ref('');

const filteredFollowing = computed(() => {
  return following.filter((following) =>
    following.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const toggleFollowingList = () => {
  isModalVisible.value = !isModalVisible.value;
};
</script>


<template>
  <div class="">

    <!-- display the number of users the user is following -->
    <p class="followingP">Following: <span class="followingSpan">{{ totalFollowing }}</span></p>

    <!-- button to open/close the modal -->
    <button class="viewFollowingBtn" @click="toggleFollowingList">
      {{ isModalVisible ? 'Close' : 'View' }}
    </button>

    <!-- modal to display list of users the user is following -->
    <div v-if="isModalVisible" class="modal-overlay">
      <div class="modal">
        <!-- Close button with 'x' -->
        <button class="closeBtn" @click="toggleFollowingList">x</button>

        <!-- search bar -->
        <input v-model="searchQuery" placeholder="Search following">

        <!-- list of users the user is following -->
        <ul>
          <li v-for="following in filteredFollowing" :key="following.id">
            {{ following.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

.viewFollowingBtn {
  background-color: #A3FDA1;
  border: 2px solid #925FF0;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  color: #2d2d2d;
  font-weight: bold;
}

.followingP {
  color: #925FF0;
}

.followingSpan {
  color: #A3FDA1;
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
  overflow-y: auto; /* vertical scrolling for when there are a lot of users being followed */
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