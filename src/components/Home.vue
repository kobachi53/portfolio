<template>
  <div>
    <navber></navber>
    <div class="parent .font-weight-black.font-italic">Welcome To My Portfolio Site</div>
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
    //
  })
};
</script>

<style>
.parent {
  padding: 310px 300px;
  font-size: 70px;
  color: #424242;
}
</style>