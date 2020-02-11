<template>
  <v-app-bar app color="grey darken-3">
    <v-layout justify-space-around>
      <div class="box">
        <router-link to="/">
          <font color="white">Home</font>
        </router-link>
      </div>
      <div class="box">
        <router-link to="/about">
          <font color="white">About</font>
        </router-link>
      </div>
      <div class="box">
        <router-link to="/experiences">
          <font color="white">Experiences</font>
        </router-link>
      </div>
      <div class="box">
        <router-link to="/works">
          <font color="white">Works</font>
        </router-link>
      </div>
      <div class="box">
        <router-link to="/contact">
          <font color="white">Contact</font>
        </router-link>
      </div>
    </v-layout>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style>
.box {
  height: 50px;
  width: 350px;
  background-color: #424242;
  position: relative;
  text-align: center;
}
a {
  display: block;
  position: absolute;
  top: 1px;
  left: 100;
  width: 100%;
  height: 100%;
  font-size: 18px;
  padding: 10px;
}
a:hover {
  background-color: #9f956c;
}
</style>