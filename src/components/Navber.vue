<template>
  <v-app-bar app color="white">
    <v-layout justify-space-around>
      <div class="box">
        <router-link to="/">
          <font color="black">Home</font>
        </router-link>
      </div>
      <div class="box">
        <router-link to="/about">
          <font color="black">About</font>
        </router-link>
      </div>
      <div class="box">
        <router-link to="/experiences">
          <font color="black">Experiences</font>
        </router-link>
      </div>
      <div class="box">
        <router-link to="/works">
          <font color="black">Works</font>
        </router-link>
      </div>
      <div class="box">
        <router-link to="/contact">
          <font color="black">Contact</font>
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
  height: 55px;
  width: 350px;
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
  font-size: 22px;
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  background-color: #c4e1a4;
}
</style>