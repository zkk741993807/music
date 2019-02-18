<template>
  <div class="play">
    <small-play class="small-play" v-if="smallShow" ref="small"></small-play>
    <normal-play class="normal-play" ref="normal"></normal-play>
  </div>
</template>
<script>
import SmallPlay from "./smallPlay";
import NormalPlay from "./normalPlay";

export default {
  data() {
    return {
      smallShow:true
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
.small-play{
  position: absolute;
  width:100%;
  z-index: 1000;
  background: #fff;
}
.normal-play{
  opacity: 0;
}
</style>
