<template>
<div class="gift-container">
<div v-for="(person, index) in calendar" :key="index" class="gifts">
<div class="backgifm">
    <img class="icon" :src="person.icon" alt="Calendar Icon" v-if="person.icon">
</div>
    <p class="name">{{ person.name }}</p>
<div>
<RouterLink style="text-decoration: none; cursor: pointer;" to="calendars">
    <button class="stakebtn">Stake</button>
</RouterLink>
</div>
</div>

<div v-for="(person, index) in gcookie" :key="index" class="gifts">
<div class="backgifm">
    <img class="icon" :src="person.icon" alt="Gcookie Icon" v-if="person.icon">
</div>
    <p class="name">{{ person.name }}</p>
<div>
<RouterLink style="text-decoration: none; cursor: pointer;" to="calendars">
    <button class="stakebtn">Stake</button>
</RouterLink>
</div>
</div>
</div>

<h1>.</h1>
<h1>.</h1>
<h1>.</h1>
<h1>.</h1>
<h1>.</h1>
<h1>.</h1>
</template>

<script setup>
import { calendar, gcookie } from '../main/home.js';
</script>

<style scoped>
.name {
    font-family: Inter;
    color: white;
    margin-left: 20px;
    margin-top: -2px;
}

.backgifm {
    background-color: rgb(0, 0, 0);
    width: 150px;
    height: 150px;
    margin-left: 20px;
    border-radius: 15px;
}
</style>
