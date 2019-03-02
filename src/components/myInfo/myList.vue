<template>
  <div>
    <div class="title">
        {{titleList[title]}}
    </div>
    <div class="wrapper">
      <ul class="play-wrapper">
        <list-item
          v-for="(item,index) in list"
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
export default {
  name:"myList",
  data() {
    return {
      list:[],
      title:"",
      titleList:{playList:"播放列表",loveList:"我的喜爱",songList:"我的歌单"}
    };
  },
  created() {
    var path=this.$route.params.path;
    this.title=path;
    this.list=this.$store.state[path];
  },
  components: {
    ListItem
  },
  methods: {
    moreBtn(data) {
      this.$store.commit("showMoreAlert", data);
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

