<template>
  <div class="parent">
    <navber></navber>
    <div class="experiences">
      <h1 style="padding-top:5px; padding-bottom:20px;">Experiences</h1>
      <v-timeline :reverse="reverse" :dense="dense">
        <v-timeline-item v-for="(experience, index) in experiences" :key="index" color="#2F80ED" fill-dot small>
          <v-card>
            <span>{{ experience.term }}</span>
            <span class="elevation-2">
              <v-card-title style="justify-content: center;">
                {{ experience.pjname + " " + experience.value }}
              </v-card-title>
              <v-card-text>
                {{ experience.description }}
              </v-card-text>
            </span>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script>
import Navber from "../components/Navber";
export default {
  name: "Experiences",
  components: {
    Navber
  },
  data() {
    return {
      width: window.innerWidth,
      experiences: [
        {
          pjname: "CAMPHOR-",
          value: "コアメンバー",
          term: "2019/01 ~ Present",
          description: "京都のIT系学生コミュニティであるCAMPHOR-の運営を行っています。学生なら誰でも無料で使えるワークスペースの管理や勉強会の企画・開催などを行っています。"
        },
        {
          pjname: "アカツキ ",
          value: "就業型インターン",
          term: "2019/09",
          description: "OSSであるaktsk/atgenという静的解析を用いたGoのテストジェネレーターの機能追加やゲーム内通貨管理サービスの大規模なアプリケーション設計の改善を行いました。"
        },
        {
          pjname: "AbemaTV ",
          value: "就業型インターン",
          term: "2019/08",
          description: "SNSから番組への流入を増やすためにTwitterシェアに関する機能を追加しました。スケーラビリティを考慮しつつ仕様設計から実装、テストを全て行いました。"
        }
      ]
    };
  },
  computed: {
    dense() {
      return !(this.width > 670);
    },
    reverse() {
      return this.width > 670;
    }
  },
  mounted: function() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize: function() {
      this.width = window.innerWidth;
    }
  }
};
</script>

<style scoped>
.experiences {
  padding: 30px 60px;
  text-align: center;
  flex-flow: wrap;
  justify-content: center;
}
</style>
