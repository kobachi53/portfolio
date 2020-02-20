<template>
  <div class="parent">
    <navber></navber>
    <div class="title">
      <h1 style="padding-top:35px; padding-bottom:12px;">Works</h1>
    </div>
    <v-container style="padding-bottom:10px">
      <v-row>
        <v-col v-for="(work, i) in works" :key="i" cols="6" md="4">
          <v-card class="pa-2 card" :href="work.URLs">
            <img :src="getImgUrl(work.imgName)" width="100%" />
            <v-card-title primary-title>
              <div class="headline">{{ work.title }}</div>
            </v-card-title>
            <v-card-subtitle>
              <span class="blue-grey--text" v-text="work.Description"></span>
            </v-card-subtitle>
            <v-chip v-for="(tech, i) in usedTech(work.usedTech)" :key="i" class="chips" color="#ADDFAD" text-color="white" v-text="tech"></v-chip>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navber from "../components/Navber";
export default {
  name: "Works",
  components: {
    Navber
  },
  methods: {
    getImgUrl(imgName) {
      return require("../assets/" + imgName);
    },
    usedTech(techs) {
      return techs.split(",");
    }
  },
  data: () => ({
    works: [
      {
        imgName: "sample.jpg",
        title: "ポートフォリオ",
        Description: "当サイトです。vue.jsとfirebaseを使用したシンプルなポートフォリオです。",
        URLs: "https://www.google.com/?hl=ja",
        usedTech: "Vue.js,firebase"
      },
      {
        imgName: "sample.jpg",
        title: "作品名2",
        Description: "作品の説明2",
        URLs: "#",
        usedTech: "使用技術2"
      },
      {
        imgName: "sample.jpg",
        title: "作品名",
        Description: "作品の説明",
        URLs: "url",
        usedTech: "使用技術"
      },
      {
        imgName: "sample.jpg",
        title: "作品名",
        Description: "作品の説明",
        URLs: "url",
        usedTech: "使用技術"
      }
    ]
  })
};
</script>

<style scoped>
.title {
  text-align: center;
}
.card {
  transition: all 0.6s ease 0s;
}
.card:hover {
  cursor: pointer;
  transform: scale(1.1, 1.1);
}
.chips {
  margin-left: 3%;
}
</style>
