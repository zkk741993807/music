<template>
  <div class="list-wrapper">
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
        ></list-item>
      </ul>
    </div>
  </div>
</template>
<script>

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
    this.$store.commit("setType", this.title);
  },
  components: {
    ListItem
  },
};
</script>
<style scoped>
.list-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.title {
  font-size: 20px;
  padding: 8px 7px;
  background: #fff;
  border-radius: 3px;
}
.wrapper{
  overflow: scroll;
}
.play-wrapper {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>

