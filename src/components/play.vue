<template>
  <div class="play" :class="!playInfo?'zIndex':''">
    <audio :src="getMediaUrl" autoplay ref="audio"></audio>
    <small-play class="small-play" v-if="smallShow" ref="small"></small-play>
    <normal-play class="normal-play" ref="normal"></normal-play>
  </div>
</template>
<script>
import SmallPlay from "./smallPlay";
import NormalPlay from "./normalPlay";

import { mapState } from "vuex";
export default {
  data() {
    return {
      smallShow: true,
      audio: null
    };
  },
  mounted() {
    this.audio = this.$refs.audio;
    console.log(this.$refs.audio)
  },
  methods: {
    play() {
      if (this.audio && this.audio.paused) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }
  },
  watch: {
    playState() {
      console.log(this);
      this.play();
    }
  },
  computed: {
    ...mapState({
      getMediaUrl: state => state.mediaUrl,
      playInfo: state => state.currentPlayInfo,
      playState: state => state.playState
    })
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
.small-play {
  position: absolute;
  width: 100%;
  z-index: 1000;
  background: #fff;
}
.normal-play {
  opacity: 0;
}
.zIndex {
  z-index: -1;
}
</style>
