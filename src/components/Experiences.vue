<template>
  <div class="parent">
    <navber></navber>
    <div class="title">
      <h1 style="padding-top:35px">Experiences</h1>
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
  data: () => ({})
};
</script>

<style>
.title {
  text-align: center;
}
</style>
