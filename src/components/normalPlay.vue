<template>
  <div class="nomarlPlay-wrapper" ref="wrapper">
    <play-header class="play-header" :play-info="playInfo" ref="playHeader"></play-header>
    <play-content
      class="play-content"
      v-if="playInfo"
      :mid="playInfo.singer[0].mid"
      :headerH="headerHeight"
    ></play-content>
    <play-footer></play-footer>
  </div>
</template>

<script>
import PlayHeader from "./play/playHeader";
import PlayContent from "./play/playContent";
import PlayFooter from "./play/playFooter";
// js
import GaussBlur from "../assets/util/gaussBlur";
import { mapState } from "vuex";
export default {
  data() {
    return {
      headerHeight: 0,
      wrapper: null
    };
  },
  watch: {
    playInfo(data) {
      var url = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${
        data.singer[0].mid
      }.jpg?max_age=2592000`;
      var img = new Image();
      // img.onload = () => {
      //   console.log("over")
      //   GaussBlur(img, this.wrapper);
      // };
      // img.src = url;
      // console.log(img)
    }
  },
  components: {
    PlayHeader,
    PlayContent,
    PlayFooter
  },
  computed: {
    ...mapState({
      playInfo: state => state.currentPlayInfo
    })
  },
  methods: {
    play() {
      this.isPlay = !this.isPlay;
      this.$emit("play");
    }
  },
  mounted() {
    this.wrapper = this.$refs.wrapper;
    console.log(this.wrapper);
    var headerHeight = this.$refs.playHeader.$el.clientHeight;
    this.headerHeight = headerHeight;
  }
};
</script>
<style scoped>
.nomarlPlay-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.play-content {
  flex-grow: 1;
}
</style>