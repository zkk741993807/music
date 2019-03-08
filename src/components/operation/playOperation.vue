<template>
  <div>
    <div class="operation-wrapper">
      <div class="item loop" @click="loop">
        <span class="iconfont">{{ isOneloop ?"&#xe802;":"&#xe803;"}}</span>
      </div>
      <div class="item prev" @click="prev">
        <span class="iconfont">&#xe800;</span>
      </div>
      <div class="item play-pause" @click="play">
        <span class="iconfont">{{ !playState ?"&#xe804;" :"&#xe69d;"}}</span>
      </div>
      <div class="item next" @click="next">
        <span class="iconfont">&#xe7ff;</span>
      </div>
      <div class="item love" @click="love">
        <span class="iconfont">{{ isLove ?"&#xe6ca;":"&#xe6c9;"}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";
import getMedia from "../../assets/js/getMedia";
export default {
  props: ["value"],
  data() {
    return {
      isOneloop: false,
      isLove: false,
    };
  },
  watch: {
    index(i){
      var data=this.currentPlayList[i];
      data=data.data||data.musicData||data;//排行榜返回数据在data中，歌手歌曲返回数据在musicData中,我的喜爱、播放、歌单列表数据直接放在[数组]中
      this.$store.commit("setCurrentPlayInfo",data);
      getMedia(data.songmid, data.strMediaMid, url => {
        this.$store.commit("setMediaUrl", url);
      });
    }
  },
  methods: {
    love() {
      this.isLove = !this.isLove;
    },
    loop() {
      this.isOneloop = !this.isOneloop;
    },
    play() {
      this.$store.commit("setPlayState",!this.playState);
    },
    prev() {
      var index=this.index;
      if (index == 0) {
        index = this.currentPlayList.length - 1;
      } else {
        index--;
      }
      this.$store.commit("setIndex",index);
    },
    next() {
      var index=this.index;
      if (index == this.currentPlayList.length - 1) {
        index = 0;
      } else {
        index++;
      }
      this.$store.commit("setIndex",index);
    }
  },
  computed: {
    ...mapState({
      playState:state=>state.playState,
      index:state=>state.index,
      currentPlayList:state=> state[state.type]
    })
  },
};
</script>
<style scoped>
.iconfont {
  font-size: 24px;
}
.operation-wrapper {
  display: flex;
  height: 60px;
  text-align: center;
  line-height: 50px;
  padding:8px 0px 14px 0px;
}
.operation-wrapper .item {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item span {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.prev span , .next span{
  background: #ccc;
}
.play-pause{
  line-height: 67px;
}
.play-pause span {
  display: inline-block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  background: #ccc;
}
</style>
