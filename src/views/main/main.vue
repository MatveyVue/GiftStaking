<template>
<div class="gift-container">
<div v-for="(person, index) in calendar" :key="index" class="gifts">
<div class="backgifm">
    <img class="icon" :src="person.icon" alt="Calendar Icon" v-if="person.icon">
</div>
    <p class="name">{{ person.name }}</p>
<div>
<RouterLink style="text-decoration: none;" to="Calendars">
    <button class="stakebtn">Stake</button>
</RouterLink>
</div>
</div>

<div v-for="(person, index) in lightsword" :key="index" class="gifts">
<div class="backgifm">
    <img class="icon" :src="person.icon" alt="light Sword Icon" v-if="person.icon">
</div>
    <p class="name">{{ person.name }}</p>
<div>
<RouterLink style="text-decoration: none;" to="LightSword">
    <button class="stakebtn">Stake</button>
</RouterLink>
</div>
</div>
</div>



<div class="gift-container" style="margin-top: 5px; width: 90%;">
<div v-for="(person, index) in bondedring" :key="index" class="gifts">
<div class="backgifm">
    <img class="icon" :src="person.icon" alt="Bonded Ring Icon" v-if="person.icon">
</div>
    <p class="name">{{ person.name }}</p>
<div>
<RouterLink style="text-decoration: none;" to="BondedRing">
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
import { calendar, lightsword, bondedring } from '../main/home.js';
</script>

<style scoped>
.name {
    font-family: Inter;
    color: white;
    margin-left: 10px;
    margin-top: -2px;
}

.backgifm {
    background-color: rgb(18, 18, 18);
    width: 50%;
    height: 150px;
    margin-left: 0px;
    border-radius: 15px;
    max-width: 200px;
}

.gifts {
    display: inline-block;
    margin-right: 12px;
    margin-top: 15px;
    background-color: rgb(18, 18, 18);
    height: 235px;
    border-radius: 15px;
    margin-left: 10px;
    width: 50%;
    max-width: 200px;
}
</style>
