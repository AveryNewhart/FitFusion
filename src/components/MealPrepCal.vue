<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const currentDate = new Date();
const currentWeek = getWeekDays(currentDate);

function getWeekDays(date: Date) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(date);
    day.setDate(date.getDate() + i);
    days.push({ date: day.toISOString().split('T')[0], meals: [] });
  }
  return days;
}

const weeks = ref([currentWeek]);
const numberOfWeeks = ref(1);

const displayedWeeks = computed(() => weeks.value.slice(0, numberOfWeeks.value));

// watch for changes in numberOfWeeks and update displayedWeeks, triggers the additional weeks to show
watch(() => numberOfWeeks.value, () => {
  weeks.value = Array.from({ length: numberOfWeeks.value }, (_, index) => {
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() + index * 7);
    return getWeekDays(startDate);
  });
});
</script>


<template>
    <div class="meal-planner">
      <h1>Plan Your Meals!</h1>
  
      <div class="calendar">
        <div v-for="(week, weekIndex) in displayedWeeks" :key="weekIndex" class="week">
          <div v-for="(day, dayIndex) in week" :key="dayIndex" class="day">
            <span>{{ day.date }}</span>
            <input v-model="day.meals" placeholder="Enter meals" />
          </div>
        </div>
      </div>
  
      <div class="dropdown">
        <label for="weeks">Number of Weeks:</label>
        <select v-model="numberOfWeeks" id="weeks">
          <option value="1">1 week</option>
          <option value="2">2 weeks</option>
          <option value="3">3 weeks</option>
          <option value="4">4 weeks (1 month)</option>
        </select>
      </div>
    </div>
  </template>
  

  <style scoped>
  .meal-planner {
    margin: auto;
  }
  
  .calendar {
    display: flex;
    flex-wrap: wrap;
  }
  
  .week {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    margin: 5px;
    padding: 10px;
  }
  
  .day {
    flex: 1;
    margin: 5px;
    text-align: center;
  }
  
  .dropdown {
    margin-top: 20px;
  }
  </style>
  


  