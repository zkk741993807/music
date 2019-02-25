<template>
  <div class="nomarlPlay-wrapper" >
    <play-header class="play-header" :play-info="playInfo" ref="playHeader"></play-header>
    <play-content class="play-content" v-if="playInfo" :mid="playInfo.singer[0].mid" :headerH="headerHeight" ></play-content>
    <play-footer></play-footer>
  </div>
</template>

<script>
import PlayHeader from "./play/playHeader";
import PlayContent from "./play/playContent";
import PlayFooter from "./play/playFooter";

import { mapState } from "vuex";
export default {
  data() {
    return {
      headerHeight:0
    };
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
    var headerHeight=this.$refs.playHeader.$el.clientHeight;
    this.headerHeight=headerHeight;
  },
};
</script>
<style >
.nomarlPlay-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.play-content {
  flex-grow: 1;
}
</style>