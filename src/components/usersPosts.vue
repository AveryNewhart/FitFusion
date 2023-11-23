<script setup lang="ts">
import { ref } from 'vue';

interface UserPost {
  caption: string;
  description: string;
  // add other properties based on your actual data structure
}

const userPosts = ref<UserPost[]>([
  // placeholder data, replace with actual user posts
  { caption: 'Post 1 Caption', description: 'this is my first post i love it here' },
  { caption: 'Post 2 Caption', description: 'second post gangggg, we are doing it' },
  { caption: 'Post 3 Caption', description: 'third post, we them boys yuhhhhh' },
  // add more posts as needed
]);

</script>

<!-- DECIDE WHAT CONTENT WILL BE IN EACH POST, A PHOTO WONT BE ASSOCIATED WITH EVERY POST UNLESS THE USER ADDS A PHOTO EVERY TIME THEY POST. -->


<template>
  <div class="user-posts-container">

    <div class="userPosts">
      <div v-for="(post, index) in userPosts" :key="index" class="userPost">
        <!-- placeholder content -->
        <img src="https://via.placeholder.com/150" alt="Post Image" />
        <p>{{ post.caption }}</p>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-posts-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.userPosts {
  display: flex;
  flex-direction: column;
}

.userPost {
  margin: 10px;
}

.userPost img {
  width: 100%;
  height: auto;
}
</style>