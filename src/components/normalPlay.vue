<template>
  <div class="nomarlPlay-wrapper" >
    <play-header class="play-header" :play-info="playInfo"></play-header>
    <play-content class="play-content" v-if="playInfo" :mid="playInfo.singer[0].mid"></play-content>
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
    return {};
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
  }
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