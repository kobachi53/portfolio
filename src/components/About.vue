<template>
  <div class="parent">
    <navber></navber>
    <div class="conteiner">
      <h1 style="text-align:center; padding-top:20px">About</h1>
      <div class="picture">
        <img src="../assets/logo.png" style="width:90px" alt />
      </div>
      <div>・Name</div>
      <div>・University</div>
      <div>・Qiita</div>
    </div>
    <div class="conteiner">
      <h1 style="text-align:center; padding-top:20px">Skills</h1>
      <h2>Front-end</h2>
      <h2>Back-end</h2>
      <h2>Other</h2>
    </div>
  </div>
</template>

<script>
import Navber from "../components/Navber";
export default {
  name: "About",
  components: {
    Navber
  },
  data: () => ({})
};
</script>


<style>
html,
body,
.parent {
  height: 100%;
}
.conteiner {
  background-color: blue;
  display: inline-block;
  width: 50%;
  height: 100%;
  border: 0.1px solid;
}
.picture {
  text-align: center;
  padding: 25px;
}
</style>
