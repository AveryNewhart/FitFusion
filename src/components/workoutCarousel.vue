<script setup lang="ts">
import { ref } from 'vue';

// define the type for a carousel item
type CarouselItem = {
  image: string;
  title: string;
  description: string;
};

const carouselItems = ref<Array<CarouselItem>>([
  {
    image: 'path-to-image1.jpg',
    title: 'Item 1',
    description: 'Description for Item 1.',
  },
  {
    image: 'path-to-image2.jpg',
    title: 'Item 2',
    description: 'Description for Item 2.',
  },
  {
    image: 'path-to-image3.jpg',
    title: 'Item 3',
    description: 'Description for Item 3.',
  },
  {
    image: 'path-to-image4.jpg',
    title: 'Item 4',
    description: 'Description for Item 4.',
  },
  {
    image: 'path-to-image5.jpg',
    title: 'Item 5',
    description: 'Description for Item 5.',
  },
  {
    image: 'path-to-image6.jpg',
    title: 'Item 6',
    description: 'Description for Item 6.',
  },
  {
    image: 'path-to-image7.jpg',
    title: 'Item 7',
    description: 'Description for Item 7.',
  },
  // add more items as needed
]);

</script>

<template>
<div>
    <h2 class="text-center mt-2">Workout Plans/Regiments</h2>
</div>
  <div class="carousel-container">
    <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item">
      <!-- Image -->
      <img :src="item.image" :alt="item.title" class="carousel-image" />

      <!-- Title -->
      <h3 class="carousel-title">{{ item.title }}</h3>

      <!-- Description -->
      <p class="carousel-description">{{ item.description }}</p>
    </div>
  </div>
  </template>

<style scoped>
  .carousel-container {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin-top: 15px;
  }

  .carousel-item {
    flex: 0 0 auto;
    width: 300px; 
    margin-right: 16px; 
    scroll-snap-align: start;
    border: 2px solid #a3fda1;
    margin-bottom: 15px;
  }

  .carousel-image {
    width: 100%;
    height: 200px; 
    object-fit: cover;
  }

  .carousel-title {
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
  }

  .carousel-description {
    font-size: 14px;
    color: #666;
  }

  /* Hide the scrollbar */
  .carousel-container::-webkit-scrollbar {
    display: none;
  }
</style>
