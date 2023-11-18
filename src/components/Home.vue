<script setup lang="ts">

</script>

<!-- FOR NORMAL VIEW -->
<!-- CREATE BOXES WITH DIFFERENT TEXT INPUTS AROUND THE SCREEN EXPLAINING THE APP, SOME BUTTONS TO ROUTE TO CREATE AN ACCOUNT AND SUCH. -->
<!-- WILL HAVE TO FULLY STYLE THE POSITIONING WHEN ALL THE BOXES ARE CREATED. -->
<!-- HAVE THE BOXES JUST EXPLAINING THE APP. THEIR SHOULD BE ONE BUTTON THAT WILL BE TO ROUTE TO THE LOGIN PAGE. -->

<!-- MOBILE VIEW -->
<!-- LOOK AT PHOTOS IN DISCORD SERVER FOR POTENTIAL DARK THEMES -->


<template>
  <!-- normal View -->
  <div class="background-container desktop-view">
    <div class="theHome">
      <h1 class="text-center">Welcome To FitFusion(tbd)</h1>
      <p>Track calories, create a workout schedule/calendar, generate running routes, follow friends, post your workouts or running routes for your friends to see, and interact with your friends on the posts!</p>

      <!-- placeholders for different text inputs and buttons -->
      <div class="feature-box">
        <p>track your calories</p>
        <router-link to="/login">
          <button class="homeBtns">track your calories</button>
        </router-link>
      </div>

      <div class="feature-box">
        <p>login or create an account</p>
        <router-link to="/login">
          <button class="homeBtns">Login</button>
        </router-link>
      </div>

      <div class="feature-box">
        <p>view the feed here</p>
        <router-link to="/feed">
          <button class="homeBtns">View Feed</button>
        </router-link>
      </div>

      <!-- more feature boxes as needed go here -->

    </div>
  </div>

  <!-- mobile View -->
  <div class="background-container mobile-view">
    <div class="theHome">
      <h1 class="text-center">Welcome To FitFusion(tbd)</h1>
      <p>Track calories, create a workout schedule/calendar, generate running routes, follow friends, post your workouts or running routes for your friends to see, and interact with your friends on the posts!</p>
      <div class="mobile-buttons">
        <router-link to="/login">
          <button class="homeBtns">Login or Create Account</button>
        </router-link>
      </div>
    </div>
    
  </div>

</template>

<style scoped>

.background-container {
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: top;
  height: calc(100vh);
}

.homeBtns {
  border: 2px solid brown;
}

.feature-box {
  margin: 20px;
  text-align: center;
  border: 3px solid limegreen;
  background-color: white;
}

.desktop-view {
  background-image: url('/images/runningBackground.jpeg');
}

.mobile-view {
  /* mobile view background */
}

.theHome {
  color: black;
}


@media only screen and (max-width: 600px) {

  .desktop-view {
    display: none; /* hide normal view on small screens, aka the picture */
  }
}

</style>