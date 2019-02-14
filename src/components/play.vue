<template>
  <div class="play">
    <small-play class="small-play" v-if="smallShow"></small-play>
    <normal-play></normal-play>
  </div>
</template>
<script>
import SmallPlay from "./smallPlay";
import NormalPlay from "./normalPlay";
export default {
  data() {
    return {
      smallShow:false
    };
  },
  components: {
    SmallPlay,
    NormalPlay
  }
};
</script>
<style scoped>
.play {
  width: 100vw;
  height: 100vh;
  background: #fff;
}
</style>
