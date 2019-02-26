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
            <img
              :src='"https://y.gtimg.cn/music/photo_new/T001R300x300M000"+mid+".jpg?max_age=2592000"'
            >
          </div>
        </li>
        <li class="lyric-wrapper">
          <!-- 减7因为index高度 -->
          <div
            class="lyric"
            ref="lyric"
            :style="{transform:lyricTranslate,marginTop:headerH-7+'px'}"
          >
            <p
              v-for="(item,i) in lyricArr"
              :index="item.tag"
              :key="i"
              :class="index==i?'active':''"
              ref="lyricLineH"
            >{{item.lyric}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import IScroll from "iscroll";
import HandleLyric from "../../assets/util/handleLyric";
import utf8 from "utf8";
import { mapState } from "vuex";
export default {
  props: ["mid", "headerH"],
  data() {
    return {
      lyricArr: [],
      index: 0
    };
  },
  created() {
    HandleLyric(this.getSongid, lyricArr => {
      this.lyricArr = lyricArr;
    });
  },
  methods: {
    calcLyricTranslate() {
      this.$nextTick(e => {

      });
    }
  },
  watch: {
    getSongid(value) {
      HandleLyric(value, lyricArr => {
        this.lyricArr = lyricArr;
      });
    },
    getPlayTime(time) {
      var len = this.lyricArr.length;
      if (len) {
        for (var i = this.index; i < len; i++) {
          var tagTime = this.lyricArr[i].tag;
          if (tagTime - time>0&&tagTime - time <1) {
            this.index = i;
            break;
          }
        }
      }
    }
  },
  mounted() {
    //播放页中图片和歌词左右滑动
    var _this = this;
    var myScroll = new IScroll(".wrapper", {
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
      getSongid: state => state.currentPlayInfo.songid,
      getPlayTime: state => state.currentPlayTime
    }),

    lyricTranslate() {
      var dis = -this.index * 27 + "px";
      return `translate(0,${dis})`;
    }
  }
};
</script>

<style scoped>
.index {
  text-align: center;
  font-size: 0px;
  width: 20px;
  margin: 0px auto 10px;
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
}
.wrapper {
  flex-grow: 1;
  overflow: hidden;
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
  padding: 10px 8px;
  box-sizing: border-box;
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
.lyric {
  transition: all 0.5s;
}
.lyric p {
  text-align: center;
  padding: 3px 4px;
}
.lyric .active {
  color: red;
}
</style>
