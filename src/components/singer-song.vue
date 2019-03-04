<template>
  <div class="list-wrapper">
    <div class="list">
      <div class="list-header">
        <div class="arrow">
          <span class="iconfont">&#xe626;</span>
        </div>
        <img :src="picUrl">
        <div class="title">{{page}}</div>
      </div>
      <div class="song-wrapper" @scroll.stop="scroll">
        <ul class="song" ref="ulSong">
          <list-item
            v-for="(item,index) in list"
            :index="index+1"
            :data="item.musicData"
            :key="index"
          ></list-item>
        </ul>
        <div class="loading">
          <div class="loading-img" v-show="list.length!=total">
            <img src="../assets/img/loading.svg">
          </div>到底了！
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//js
import GetSong from "../assets/js/getSong";
//components
import ListItem from "./listItem";
export default {
  name: "myList",
  data() {
    return {
      list: [],
      title: "",
      picUrl: "",
      ulSongHeight: 0,
      page: 0,
      mid:"",
      total:0,//歌手有多少首歌
    };
  },
  methods: {
    scroll(e) {
      if(this.total==this.list.length){
        return ;
      }
      var scrollTop = e.target.scrollTop;
      var wrapperHeight = e.target.clientHeight;
      console.log(scrollTop, wrapperHeight);
      if (this.ulSongHeight - scrollTop == wrapperHeight - 30) {
        this.getData(++this.page)
      }
    },
    getData(page) {
      GetSong(this.mid, page, data => {
        data = data.data;
        this.total=data.total;
        this.title = data.singer_name;
        this.list = this.list.concat(data.list);
      });
    }
  },
  created() {
    this.$store.commit("setHeaderHide", true);
    //改变header 显示状态
    // 获取route params
    this.mid = this.$route.params.mid;
    this.picUrl = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${this.mid}.jpg?max_age=2592000`;
    this.getData(this.page);
  },
  destroyed() {
    this.$store.commit("setHeaderHide", false); //离开让header显示正常
  },
  components: {
    ListItem
  },
  updated() {
    this.ulSongHeight = this.$refs.ulSong.clientHeight;
  }
};
</script>
<style scoped>
.iconfont {
  font-size: 30px;
}
.list-wrapper {
  transform: translateY(0px);
  width: 100%;
  height: 100%;
}
.list {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
}
.list-header {
  width: 100%;
  font-size: 20px;
  position: relative;
}
.list-header img {
  width: 100%;
  height: 300px;
}
.arrow,
.title {
  position: absolute;
  width: 100%;
  margin-left: 10px;
  color: #fff;
}
.arrow {
  top: 10px;
}
.title {
  bottom: 10px;
  font-size: 24px;
}
.song-wrapper {
  overflow: scroll;
  padding: 0 8px;
}
.loading {
  text-align: center;
  height: 30px;
  overflow: hidden;
}
.loading-img img {
  height: 30px;
  height: 30px;
}
</style>
