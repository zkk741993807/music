<template>
  <div>
    <div class="list-wrapper">
      <ul>
        <!-- 播放列表 -->
        <router-link tag="li" :to="{name:'myList',params:{path:'playList'}}" class="list-item">
          <div class="pic">
            <!-- <img  src="../assets/img/defaultImg.png"> -->
          </div>
          <div class="des">
            <span class="title">播放列表</span>
            <span class="num">{{playedListNum}}首</span>
          </div>
          <div class="more">
            <span class="iconfont">&#xe629;</span>
          </div>
        </router-link>
        <!-- 我的喜爱列表 -->
        <router-link tag="li" :to="{name:'myList',params:{path:'loveList'}}" class="list-item">
          <div class="pic">
            <!-- <img  src="../assets/img/defaultImg.png"> -->
          </div>
          <div class="des">
            <span class="title">我的喜爱</span>
            <span class="num">{{loveListNum}}首</span>
          </div>
          <div class="more">
            <span class="iconfont">&#xe629;</span>
          </div>
        </router-link>
        <!-- 我的列表 -->
        <router-link tag="li" :to="{name:'myList',params:{path:'songList'}}" class="list-item">
          <div class="pic">
            <!-- <img  src="../assets/img/defaultImg.png"> -->
          </div>
          <div class="des">
            <span class="title">我的歌单</span>
            <span class="num">{{songListNum}}首</span>
          </div>
          <div class="more">
            <span class="iconfont">&#xe629;</span>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import Storage from "../assets/util/storage";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      playedListNum: state => state.playList.length,
      loveListNum: state => state.loveList.length,
      songListNum: state => state.songList.length
    })
  },
  created() {
    var playList = Storage.getStorage("playList");
    playList && this.$store.commit("storageTosetPlayList", playList);

    var loveList = Storage.getStorage("loveList");
    loveList && this.$store.commit("storageTosetLoveList", loveList);

    var songList = Storage.getStorage("songList");
    songList && this.$store.commit("storagesetSongList", songList);
  }
};
</script>
<style scoped>
.list-wrapper {
  margin: 0px 8px;
}
.list-item {
  display: flex;
  background: #fff;
  margin-bottom: 6px;
}
.pic {
  width: 0px;
  height: 0px;
  padding: 8%;
  margin: 8px;
  background-image: url("../assets/img/defaultImg.png");
  background-size: 100% 100%;
}
.des {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.num {
  font-size: 14px;
  color: slategray;
}
.more {
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconfont {
  padding: 0 7px;
}
</style>
