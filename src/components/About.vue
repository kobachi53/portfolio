<template>
  <div class="parent">
    <navber></navber>
    <div class="conteiner">
      <div class="conteiner_child">
        <h1 style="padding-top:35px">About</h1>
        <div class="picture">
          <img src="../assets/neneco.png" style="width:18%" alt />
        </div>
        <div class="about">
          <ul>
            <li><span style="font-weight: bold;">Name：</span> 西村智帆（Nishimura Chiho）</li>
            <li><span style="font-weight: bold;">University：</span>創価大学工学部生命情報工学科</li>
            <li>
              <span style="font-weight: bold;">Qiita：</span>
              <a style="display: contents; font-size:20px;" href="https://qiita.com/mutsuki53">@mutsuki53</a>
            </li>
          </ul>
        </div>
        <div style="padding-top:20px">
          <a style="display: contents;" href="https://twitter.com/rtc_nws"><img style="padding-right:40px;" src="../assets/twitter.png" alt/></a>
          <a style="display: contents;" href="https://github.com/kobachi53"><img src="../assets/github.png" alt/></a>
        </div>
      </div>
      <div class="conteiner_child">
        <h1 style="padding-top:35px">Skills</h1>
        <div class="skills">
          <div class="skills_child">
            <h2 class="front">Front-end</h2>
            <div class="skillbox">
              ・Sample
              <br />・Sample <br />・Sample
            </div>
          </div>
          <div>
            <h2 class="front">Back-end</h2>
            <div class="skillbox">
              ・Sample
              <br />・Sample
            </div>
          </div>
          <div>
            <h2 class="front">Other</h2>
            <div class="skillbox">
              ・Sample
              <br />・Sample
            </div>
          </div>
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

/* About部分のCSS */

.picture {
  text-align: center;
  padding: 30px 0px;
}

.about {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
}

li {
  margin-bottom: 17px;
  font-size: 125%;
}

/* Skills部分のCSS */

.skills {
  text-align: center;
}

.front {
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10px;
}

.skillbox {
  border: 0.1px solid;
  margin: 0% 25%;
  text-align: left;
}
</style>
