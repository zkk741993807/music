<template>
  <div class="play" :class="!playInfo?'zIndex':''">
    <audio
      :src="getMediaUrl"
      autoplay
      ref="audio"
      @timeupdate="updateTime"
      @ended="playEnd"
    ></audio>
    <small-play class="small-play" v-if="smallShow" ref="small"></small-play>
    <normal-play class="normal-play" ref="normal"></normal-play>
  </div>
</template>
<script>
//js

//components
import SmallPlay from "./smallPlay";
import NormalPlay from "./normalPlay";

import { mapState } from "vuex";
export default {
  data() {
    return {
      smallShow: true,
      audio: null,
      end: false
    };
  },
  mounted() {
    this.audio = this.$refs.audio;
    this.$store.commit("setAudioObj", this.audio);
  },
  methods: {
    play() {
      if (this.audio && this.audio.paused) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    },
    next() {
      var index = this.index;
      if (index == this.currentPlayList.length - 1) {
        index = 0;
      } else {
        index++;
      }
      this.$store.commit("setIndex", index);
    },
    updateTime(e) {
      this.$store.commit("setPlayTime", e.target.currentTime);
    },
    playEnd() {
      this.end = true;
      this.next();
      this.$store.commit("setPlayState", false);
    }
  },
  watch: {
    playState() {
      console.log("play")
      if (this.end) {
        //避免播放完成后再次播放
        return;
      }
      this.play();
    }
  },
  computed: {
    ...mapState({
      getMediaUrl: state => state.mediaUrl,
      playInfo: state => state.currentPlayInfo,
      playState: state => state.playState,
      index: state => state.index,
      currentPlayList: state => state[state.type]
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
  transition: all 0.5;
}
.normal-play {
  opacity: 0;
  position: relative;
  z-index: 0;
  background: #fff;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.zIndex {
  z-index: -1;
}
</style>
