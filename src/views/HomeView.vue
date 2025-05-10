<template>
<div class="header" style="text-align: center;">
<div class="prfback" style="margin-top: 37px;">
  <img class="profile" width="150px" src="https://github.com/MatveyVue/gift/blob/main/Anonim.png?raw=true">
</div>
  <h2 class="nickname" style="color: white;">{{ user }}</h2>
</div>

<div class="background">
<div class="psfixed">
<p class="staking">Staking</p>
<hr style="position: fixed;  width: 80px; float: left; margin-left: 10px; margin-top: 45px; border: 0.5px solid white; border-radius: 25px;">
</div>

<Main />

</div>
</template>

<script>
import Main from '../views/main/main.vue';

export default {
  components: {
    Main,
  },
  data() {
    return {
      user: window.Telegram.WebApp.initDataUnsafe.user ? window.Telegram.WebApp.initDataUnsafe.user.username : null,
    };
  },
};
</script>

<style scoped>
body {
  background-attachment: fixed;
  background: fixed;
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;
  position: fixed;
  touch-action: none;
}
</style>