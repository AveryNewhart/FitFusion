<script setup lang="ts">

import Nav from '../components/Nav.vue';

import { ref } from 'vue';

// Initially show login form
const loginMode = ref('signup');

const toggleForm = () => {
  loginMode.value = loginMode.value === 'signup' ? 'login' : 'signup';
};


</script>

<!-- HAVE A HIDE/SHOW BUTTON TO SEE THE LETTERS OF THE PASSWORD -->

<template>
    <div>
      <Nav />
      <div class="centered-container">
        <!-- Login Form -->
        <transition name="flip" mode="out-in">
            <div :key="loginMode" class="login-box login-box-1" v-if="loginMode === 'login'">
                <h2 class="text-3xl font-semibold text-center text-white mb-6">Login</h2>
                <form id="login-form" class="space-y-4">
                    <div class="relative">
                        <input type="text" name="username-login" id="username-login" placeholder="" class="peer h-10 w-full border-b-2 focus:outline-none inputColor">
                        <label for="username-login" class="absolute top-0 -z-1 duration-300 origin-0 transform translate-y-2 textColor">Username</label>
                    </div>
                    <div class="relative">
                        <input type="password" name="password-login" id="password-login" placeholder=" " class="peer h-10 w-full border-b-2 focus:outline-none inputColor">
                        <label for="password-login" class="absolute top-0 -z-1 duration-300 origin-0 transform translate-y-2 textColor">Password</label>
                    </div>
                    <button class="login-btn relative overflow-hidden text-white py-2 px-4 rounded-full transform transition hover:scale-105 buttonColor">
                        <span class="absolute top-0 left-0 w-full h-full transform scale-x-0"></span>
                        Submit
                    </button>
                </form>
                <button class="toggle-form switchColor" @click="toggleForm">No account, sign up here</button>
            </div>
          <!-- Signup Form -->
            <div :key="loginMode + '-signup'" class="login-box login-box-2" v-else>
                <h2 class="text-3xl font-semibold text-center text-white mb-6">Sign-Up</h2>
                <form id="signup-form" class="space-y-4">
                    <div class="relative">
                        <input type="text" name="username-signup" id="username-signup" placeholder=" " class="peer h-10 w-full border-b-2 focus:outline-none inputColor">
                        <label for="username-signup" class="absolute top-0 -z-1 duration-300 origin-0 transform translate-y-2 textColor">Username</label>
                    </div>
                    <div class="relative">
                        <input type="password" name="password-signup" id="password-signup" placeholder=" " class="peer h-10 w-full border-b-2 focus:outline-none inputColor">
                        <label for="password-signup" class="absolute top-0 -z-1 duration-300 origin-0 transform translate-y-2 textColor">Password</label>
                    </div>
                    <button class="login-btn relative overflow-hidden text-white py-2 px-4 rounded-full transform transition hover:scale-105 buttonColor">
                        <span class="absolute top-0 left-0 w-full h-full transform scale-x-0"></span>
                        Submit
                    </button>
                </form>
                <button class="toggle-form switchColor" @click="toggleForm">Already have an account? Log in</button>
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
  background-color: #2d2d2d;
}

.textColor {
  /* color: #925ff0; */
  color: white;
  margin-left: 5px;
}

.inputColor {
  background-color: #a3fda1;
  border: 1px solid #925ff0;
  border-radius: 5px;
  color: #2d2d2d;
}

.buttonColor {
  background-color: #925ff0;
  color: #a3fda1;
  font-weight: bold;
  border: 1px solid #a3fda1;
}

.buttonColor:hover {
  background-color: #a3fda1;
  color: #925ff0;
  border: 1px solid #925ff0;
}

.switchColor {
  color: #925ff0;
  border-bottom: 1px solid #a3fda1;
  margin-top: 10px;
}

.switchColor:hover {
  background-color: #a3fda1;
  border-radius: 10px;
  padding: 2px;
}


/* the commented out style is for the flip animation, will decide if i want it when i fully style the login/signup page */

/* .flip-enter-active, .flip-leave-active {
  transition: transform 0.5s;
}
.flip-enter, .flip-leave-to {
  transform: rotateY(180deg);
} */

</style>