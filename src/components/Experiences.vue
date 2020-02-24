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
                {{ experience.pjName + " " + experience.position }}
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
import { db } from "../plugins/firebase";

export default {
  name: "Experiences",
  components: {
    Navber
  },
  data() {
    return {
      width: window.innerWidth,
      experiences: []
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
  },
  firestore() {
    return {
      experiences: db.collection("experiences").orderBy("startDay", "asc")
    };
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
