<script setup lang="ts">

import Nav from './/Nav.vue';

import { ref } from 'vue';

// Initially show login form
const loginMode = ref('login');

const toggleForm = () => {
  loginMode.value = loginMode.value === 'login' ? 'signup' : 'login';
};


</script>

<template>
    <div>
      <Nav />
      <div class="centered-container">
        <!-- Login Form -->
        <transition name="flip" mode="out-in">
            <div :key="loginMode" class="login-box login-box-1" v-if="loginMode === 'login'">
                <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
                <form id="login-form" class="space-y-4">
                    <div class="relative">
                        <input type="text" name="username-login" id="username-login" placeholder=" " class="peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500">
                        <label for="username-login" class="absolute top-0 -z-1 duration-300 origin-0 transform translate-y-2 text-gray-600">Username</label>
                    </div>
                    <div class="relative">
                        <input type="password" name="password-login" id="password-login" placeholder=" " class="peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500">
                        <label for="password-login" class="absolute top-0 -z-1 duration-300 origin-0 transform translate-y-2 text-gray-600">Password</label>
                    </div>
                    <button class="login-btn relative overflow-hidden text-white bg-gradient-to-r from-green-400 to-blue-500 py-2 px-4 rounded-full transform transition hover:scale-105">
                        <span class="absolute top-0 left-0 w-full h-full transform scale-x-0 bg-gradient-to-r from-green-400 to-blue-500"></span>
                        Submit
                    </button>
                </form>
                <button class="toggle-form text-blue-500 hover:underline" @click="toggleForm">No account, sign up here</button>
            </div>
          <!-- Signup Form -->
            <div :key="loginMode + '-signup'" class="login-box login-box-2" v-else>
                <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">Sign-Up</h2>
                <form id="signup-form" class="space-y-4">
                    <div class="relative">
                        <input type="text" name="username-signup" id="username-signup" placeholder=" " class="peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500">
                        <label for="username-signup" class="absolute top-0 -z-1 duration-300 origin-0 transform translate-y-2 text-gray-600">Username</label>
                    </div>
                    <div class="relative">
                        <input type="password" name="password-signup" id="password-signup" placeholder=" " class="peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500">
                        <label for="password-signup" class="absolute top-0 -z-1 duration-300 origin-0 transform translate-y-2 text-gray-600">Password</label>
                    </div>
                    <button class="login-btn relative overflow-hidden text-white bg-gradient-to-r from-green-400 to-blue-500 py-2 px-4 rounded-full transform transition hover:scale-105">
                        <span class="absolute top-0 left-0 w-full h-full transform scale-x-0 bg-gradient-to-r from-green-400 to-blue-500"></span>
                        Submit
                    </button>
                </form>
                <button class="toggle-form text-blue-500 hover:underline" @click="toggleForm">Already have an account? Log in</button>
            </div>
        </transition>
      </div>
    </div>
  </template>
  
  

<style scoped>

.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}


/* the commented out style is for the flip animation, will decide if i want it when i fully style the login/signup page */

/* .flip-enter-active, .flip-leave-active {
  transition: transform 0.5s;
}
.flip-enter, .flip-leave-to {
  transform: rotateY(180deg);
} */

</style>