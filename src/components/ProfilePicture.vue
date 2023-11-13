<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      imageUrl: '',
    };
  },
  methods: {
    handleFileChange(e: Event) {
      const input = e.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        this.imageUrl = URL.createObjectURL(input.files[0]);
      }
    },
  },
});
</script>

<!-- I WANT THE PROFILE PICTURE TO BE DISPLAYED WITH A TINY EDIT BUTTON NEXT TO IT. -->
<!-- ONCE THE EDIT BUTTON IS CLICKED THEN THE FILES POP UO TO SELECT A NEW PHOTO. -->
<!-- IT ISN'T CLEAN CURRENTLY, AND WILL ALSO ONLY WORK FOR ON THE USERS PROFILE, BECAUSE I DONT WANT TO HAVE ANY USER BE ABLE TO CHANGE ANY USERS PROFILE PICTURE.  -->

<template>
    <div>
      <h2>Upload Profile Picture</h2>
      <img :src="imageUrl" alt="" class="uploaded-image">
      <form action="index.html" method="post">
        <input type="file" name="file" id="file" @change="handleFileChange" accept="image/*">
        <!-- <label for="file">Select a file ...</label> -->
      </form>
    </div>
  </template>

<style scoped>
.uploaded-image {
  max-width: 100px;
  height: 100px; 
  border-radius: 50px;
}


</style>
