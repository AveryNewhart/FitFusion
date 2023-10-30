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
            <h2>Login</h2>
            <form id="login-form">
                <div class="user-box">
                    <input type="text" name="" id="username-login">
                    <label for="username-login">Username</label>
                </div>
                <div class="user-box">
                    <input type="password" name="" id="password-login">
                    <label for="password-login">Password</label>
                </div>
                <button class="login-btn" type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                    </button>
            </form>
            <button class="toggle-form" @click="toggleForm">No account, sign up here</button>
           </div>
          <!-- Signup Form -->
          <div :key="loginMode + '-signup'" class="login-box login-box-2" v-else>
            <h2>Sign-Up</h2>
            <form id="signup-form">
                <div class="user-box">
                    <input type="text" name=""  id="username-signup">
                    <label for="username-signup">Username</label>
                </div>
                <div class="user-box">
                    <input type="password" name="" id="password-signup">
                    <label for="password-signup">Password</label>
                </div>
                <button class="login-btn" type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </button>
            </form>
            <button class="toggle-form" @click="toggleForm">Already have an account? Log in</button>
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