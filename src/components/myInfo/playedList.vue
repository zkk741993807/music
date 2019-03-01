<template>
  <div>
    <div class="title">
        播放列表
    </div>
    <div class="wrapper">
      <ul class="play-wrapper">
        <list-item
          v-for="(item,index) in playList"
          :index="index+1"
          :data="item"
          :key="index"
          @play="play"
          @moreBtn="moreBtn"
        ></list-item>
      </ul>
    </div>
  </div>
</template>
<script>
//js
import getMedia from "../../assets/js/getMedia";
//components
import ListItem from "../listItem";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      playList: state => state.playList
    })
  },
  components: {
    ListItem
  },
  methods: {
    moreBtn(name) {
      this.$store.commit("showMoreAlert", name);
    },
    play(data) {
      getMedia(data.songmid, data.strMediaMid, url => {
        this.$store.commit("setMediaUrl", url);
      });
    }
  }
};
</script>
<style scoped>
.title{
    font-size:20px;
    padding:8px 7px;
    background: #fff;
    border-radius: 3px;
}
.play-wrapper {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>

