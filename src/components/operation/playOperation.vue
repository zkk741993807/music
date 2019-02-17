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
        <span class="iconfont">{{ isPlay ?"&#xe804;" :"&#xe69d;"}}</span>
      </div>
      <div class="item next" @click="next">
        <span class="iconfont">&#xe7ff;</span>
      </div>
      <div class="item love" @click="love">
        <span class="iconfont">{{ isLove ?"&#xe6ca;":"&#xe6c9;"}}</span>
      </div>
      {{index}}
    </div>
  </div>
</template>
<script>
export default {
  props: ["value"],
  data() {
    return {
      isOneloop: false,
      isPlay: false,
      isLove: false,
      length: 5,
      index: 0
    };
  },
  methods: {
    love() {
      this.isLove = !this.isLove;
    },
    loop() {
      this.isOneloop = !this.isOneloop;
    },
    play() {
      this.isPlay = !this.isPlay;
    },
    prev() {
      if (this.index == 0) {
        this.index = this.length - 1;
      } else {
        this.index--;
      }
    },
    next() {
      if (this.index == this.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
    }
  }
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
  line-height: 57px;
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
  border-radius: 50%;
  background: #ccc;
}
</style>
