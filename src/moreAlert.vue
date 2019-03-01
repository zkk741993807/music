<template>
  <div>
    <div class="alert-wrapper">
      <div class="title">{{moreAlertData.songname}}</div>
      <ul class="item-wrapper">
        <li class="item">
          <a download="a" :href="url">
            <span class="iconfont">&#xe66b;</span>
            下载
          </a>
        </li>
        <li class="item" @click="isLove">
          <span
            class="iconfont"
            :style="{ color:loveState?'red':''}"
          >{{ loveState ? "&#xe6ca;" : "&#xe6c9;" }}</span>
          添加至我喜欢
        </li>
        <li class="item">
          <span class="iconfont">&#xe642;</span>
          添加至歌单
        </li>
      </ul>
      <div class="cancle" @click="cancle">取消</div>
    </div>
  </div>
</template>
<script>
import getMedia from "./assets/js/getMedia";
export default {
  data() {
    return {
      loveState: false,
      url: ""
    };
  },
  created() {
    getMedia(
      this.moreAlertData.songmid,
      this.moreAlertData.strMediaMid,
      url => {
        this.url = url;
      }
    );
  },
  computed: {
    moreAlertData() {
      return this.$store.state.moreAlertData;
    }
  },
  methods: {
    cancle() {
      this.$store.commit("showMoreAlert", "");
    },
    isLove() {
      this.loveState = !this.loveState;
    }
  }
};
</script>
<style scoped>
.alert-wrapper {
  position: absolute;
  width: 90%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  border-radius: 5px;
  background: #fff;
  padding: 20px 20px;
}
.title {
  font-size: 30px;
  font-weight: bloder;
}
.cancle {
  color: red;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.item-wrapper {
  padding: 30px 0px;
}
.item {
  padding: 15px 0px;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
}
.item a{
  display: inline-block;
  width:100%;
  height:100%;
}
.item:last-of-type {
  border-bottom: none;
}
.item .iconfont {
  font-size: 18px;
  margin-right: 8px;
}
</style>
