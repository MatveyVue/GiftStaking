<template>
<div class="header" style="text-align: center; margin-top: -24px;">
<div class="prfback" style="margin-top: 61px;">
  <img class="profile" width="150px" src="https://github.com/MatveyVue/gift/blob/main/Anonim.png?raw=true">
</div>
  <h2 class="nickname" style="color: white;">{{ user }}</h2>
</div>
      
<div class="background">
<div class="psfixed">
  <RouterLink style="text-decoration: none;" to="/">
      <p class="staking">Staking</p>
  </RouterLink>
<hr style="position: fixed;  width: 80px; float: left; margin-left: 10px; margin-top: 45px; border: 0.5px solid white; border-radius: 25px;">
</div>


<div class="container">
<div v-for="(person, index) in calendar" :key="index" class="gifts">
  <div class="backgift">
  <img style="width: 100px; margin-top: 20px; margin-left: 15px;" :src="person.icon" alt="Calendar Icon" v-if="person.icon">
  </div>
  <p class="name">{{ person.name }}</p>
  <p class="locked">Total Locked: {{ person.total }}</p>
  <p class="reward">Total Reward/Days: {{ person.reward }}</p>
  <p class="time">Total Times: {{ person.time }}</p>
</div>
</div>
<a href="https://t.me/haterusers">
  <button class="stakebtn2">Stake</button>
</a>

  
<p class="steaked">Steaked</p>

<div class="outer-container">
<div v-for="(person, index) in stcalendars" :key="index" class="gifts">
<div class="usercont">
  <div class="calback">
    <img style="width: 80px; margin-left: -5px; border-radius: 15px;" :src="person.icon" alt="Calendar Icon" v-if="person.icon">
  </div>
    <p class="nameuser">{{ person.name }}</p>
    <p class="timeuser">{{ person.time }}</p>
</div>
</div>

<h1>.</h1>
<h1>.</h1>
<h1>.</h1>
<h1>.</h1>
</div>
</div>
</template>
      
<script setup>
import { calendar } from '/src/views/main/home.js'; 
import { stcalendars } from '/src/views/staked/staked.js'; 
</script>
  
<script>
export default {
data() {
    return {
      user: window.Telegram.WebApp.initDataUnsafe.user ? window.Telegram.WebApp.initDataUnsafe.user.username : null 
    };
  },
};
</script>
  
<style scoped>
body {
  background-attachment: fixed;
  background: fixed;
  overflow-y: hidden;
  position: fixed;
  touch-action: none;
  font-family: Inter;
  overflow-y: scroll;
}
  
.name {
  color: white;
  font-family: Inter;
  margin-left: 130px;
  margin-top: -125px;
}
  
.nameuser {
  color: white;
  font-family: Inter;
  margin-left: 120px;
  margin-top: -50px;
}
  
.timeuser {
  color: white;
  font-family: Inter;
  margin-left: 70vw;
  margin-top: -35px;
}
  
.outer-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
