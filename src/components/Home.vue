<template>
  <div>
    <navber></navber>
    <div class="TextAnime1">
      <span
        v-for="(t, index) in text"
        :key="index"
        class="item"
        :style="{animationDelay: index*100+'ms'}"
        v-text="t"
      />
    </div>
  </div>
</template>

<script>
import Navber from "../components/Navber";
export default {
  name: "Home",
  components: {
    Navber
  },
  data: () => ({
    text: "Welcome　To　MyPortfolioSite"
  })
};
</script>


<style scoped>
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}
.item {
  display: inline-block;
  color: #8bc34a;
  font-weight: bold;
  animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
.TextAnime1 {
  padding: 310px 360px;
  font-size: 66px;
}
</style>
