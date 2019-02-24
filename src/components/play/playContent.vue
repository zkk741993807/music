<template>
  <div class="play-content">
    <div class="index" ref="index">     
      <span class="active-item"></span>
      <span class="static-item"></span>
      <span class="static-item"></span>
    </div>
    <div class="wrapper">
      <ul class="play-wrapper" @touchstart.prevent>
        <li class="pic-wrapper">
          <div class="pic">
            <img  :src='"https://y.gtimg.cn/music/photo_new/T001R300x300M000"+mid+".jpg?max_age=2592000"'>
          </div>
        </li>
        <li class="lyric-wrapper">
          <div>{{getSongid}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import IScroll from "iscroll";
import getLyric from  "../../assets/js/getLyric";
import {mapState} from "vuex";
export default {
  props:["mid"],
  data(){
    return{
      lyric:""
    }
  },
  created() {
    getLyric(this.getSongid,lyric=>{
      console.log(lyric)
      this.lyric=lyric;
    })
  },
  mounted() {
    var _this = this;
    var myScroll = new IScroll(".wrapper", {//播放页中图片和歌词左右滑动
      scrollX: true,
      scrollY: false,
      momentum: false,
      snap: true,
      snapSpeed: 400,
      indicators: {
        el: _this.$refs.index,
        resize: false
      }
    });
  },
  computed: {
    ...mapState({
      getSongid:state=>state.currentPlayInfo.songid
    })
  },
};
</script>

<style scoped>
.index {
  text-align: center;
  font-size: 0px;
  width: 20px;
  margin: 0px auto 20px;
  position: relative;
  height: 7px;
}
.static-item {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #ddd;
  top: 50%;
  border-radius: 50%;
  z-index: 0;
  transform: translate(0, -50%);
}
.index .static-item:nth-of-type(2) {
  left: 0px;
}
.index .static-item:nth-of-type(3) {
  right: 0px;
}
.active-item {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #888;
  position: relative;
  z-index: 1000;
}
.index-active {
  width: 7px;
  height: 7px;
  background: #888;
}
.play-content {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.wrapper {
  flex-grow: 1;
}
.play-wrapper {
  width: 200%;
  height: 100%;
}
.play-wrapper::after {
  content: "";
  display: block;
  clear: both;
}
.pic-wrapper,
.lyric-wrapper {
  width: 50%;
  float: left;
  height: 100%;
}
.pic {
  width: 0px;
  height: 0px;
  padding: 40%;
  position: relative;
  margin: 10px auto 0px;
}
.pic img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
