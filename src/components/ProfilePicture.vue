<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      imageUrl: '',
      showFileInput: false,
    };
  },
  methods: {
    handleFileChange(e: Event) {
      const input = e.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        this.imageUrl = URL.createObjectURL(input.files[0]);
        this.showFileInput = false; // Hide the file input after selecting a file
      }
    },
    showEditOptions() {
      this.showFileInput = true;
    },
  },
});
</script>

<!-- IT ISN'T CLEAN CURRENTLY, AND WILL ALSO ONLY WORK FOR ON THE USERS PROFILE, BECAUSE I DONT WANT TO HAVE ANY USER BE ABLE TO CHANGE ANY USERS PROFILE PICTURE.  -->
<!-- just need to adjust code or since the profile picture will save to the user, just not include the profile picture logic on another users profile -->
<!-- look at project 3 or music project? i think i did it there -->

<template>
  <div>
    <div>
      <img :src="imageUrl" alt="" class="uploaded-image">
      <button class="editBtn rounded" @click="showEditOptions">Edit Profile Picture</button>
    </div>
    <form v-if="showFileInput" action="index.html" method="post">
      <input type="file" name="file" id="file" @change="handleFileChange" accept="image/*">
    </form>
  </div>
</template>

<style scoped>
.uploaded-image {
  max-width: 100px;
  height: 100px; 
  border-radius: 50px;
}

.editBtn {
  background-color: #925ff0;
  border: 2px solid #a3fda1;
  padding: 3px;
}


</style>
