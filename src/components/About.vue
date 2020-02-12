<template>
  <div class="parent">
    <navber></navber>
    <div class="conteiner">
      <div class="conteiner_child">
        <h1 style="padding-top:35px">About</h1>
        <div class="picture">
          <img src="../assets/logo.png" style="width:18%" alt />
        </div>
        <div class="about">
          <h2>・Name：西村智帆（Nishimura Chiho）</h2>
          <h2>・University：創価大学工学部生命情報工学科</h2>
          <h2>・Qiita：</h2>
        </div>
      </div>
      <div class="conteiner_child">
        <h1 style="padding-top:35px">Skills</h1>
        <div class="skills">
          <h2 style="margin: 5% 10% 0px 10px;">Front-end</h2>
          <div class="skillbox">sss</div>
          <h2 style="margin: 2% 10%;">Back-end</h2>
          <div class="skillbox">sss</div>
          <h2 style="margin: 2% 10%;">Other</h2>
          <div class="skillbox">sss</div>
        </div>
      </div>
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
.parent,
.conteiner {
  height: 100%;
}

.conteiner {
  display: flex;
}

.conteiner_child {
  width: 50%;
  height: 100%;
  border: 0.1px solid;
  text-align: center;
}

.picture {
  text-align: center;
  padding: 30px 0px;
}

.about {
  text-align: center;
}

.skills {
  text-align: center;
}

.skillbox {
  border: 0.1px solid;
  margin: 0% 25%;
}
</style>