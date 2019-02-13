<template>
  <div class="play-content">
    <div class="index" ref="index">
      <span class="index-item"></span>
      <span class="index-item"></span>
    </div>
    <div class="wrapper">
      <ul class="play-wrapper" @touchstart.prevent>
        <li class="pic-wrapper">
          <div class="pic">
            <img src="../../assets/img/defaultImg.png">
          </div>
        </li>
        <li class="lyric-wrapper">
          <div>lyric</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IScroll from "iscroll";
export default {
  methods: {},
  updated() {
      console.log(this.$refs)
  },
  mounted() {
      console.log(this.$refs)
      var _this=this;
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
  }
};
</script>

<style scoped>
.index {
  text-align: center;
  font-size: 0px;
}
.index-item {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #bbb;
}
.index-item:nth-child(1) {
  margin-right: 10px;
}
.index-active {
  width: 7px;
  height: 7px;
  background: #888;
}
.play-content {
  width: 100%;
  overflow: hidden;
}
.play-wrapper {
  width: 200%;
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
}
.pic {
  width: 0px;
  height: 0px;
  padding: 40%;
  position: relative;
  margin: 0 auto;
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
