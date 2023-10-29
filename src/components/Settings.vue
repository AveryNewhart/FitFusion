<script setup lang="ts">
</script>

<template>
  <div class="">
    <h1 class="settingH1">settings</h1>
    <div class="settings-container">
      <div class="setting">
        <p class="settingLeft">setting 1</p>
        <label class="switch">
          <input type="checkbox" class="onOff">
          <span class="slider round"></span>
        </label>
      </div>
      <div class="setting">
        <p class="settingLeft">setting 2</p>
        <label class="switch">
          <input type="checkbox" class="onOff">
          <span class="slider round"></span>
        </label>
      </div>
      <div class="setting">
        <p class="settingLeft">setting 3</p>
        <label class="switch">
          <input type="checkbox" class="onOff">
          <span class="slider round"></span>
        </label>
      </div>
      <div class="setting">
        <p class="settingLeft">setting 4</p>
        <label class="switch">
          <input type="checkbox" class="onOff">
          <span class="slider round"></span>
        </label>
      </div>
      <div class="setting">
        <p class="settingLeft">setting 5</p>
        <label class="switch">
          <input type="checkbox" class="onOff">
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>

.settingH1 {
  text-align: center;
}

.settings-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.settingLeft {
  flex: 1;
  margin-right: 100px;
}

.onOff {
  flex: 0;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: red;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: lightblue;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: purple;
}

input:focus + .slider {
  box-shadow: 0 0 1px purple;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>