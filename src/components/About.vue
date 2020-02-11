<template>
  <div>
    <navber></navber>
    <div>About</div>
  </div>
</template>

<script>
import Navber from "../components/Navber";
export default {
  name: "About",
  components: {
    Navber
  },
  data: () => ({
    text: "Welcome　To　MyPortfolioSite"
  })
};
</script>


<style>
</style>
