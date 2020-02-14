<template>
  <div class="parent">
    <navber></navber>
    <div class="title">
      <h1 style="padding-top:35px">Works</h1>
    </div>
  </div>
</template>

<script>
import Navber from "../components/Navber";
export default {
  name: "Works",
  components: {
    Navber
  },
  data: () => ({})
};
</script>


<style scoped>
.title {
  text-align: center;
}
</style>
