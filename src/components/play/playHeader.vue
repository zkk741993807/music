<template>
  <div class="header-wrapper">
    <div class="title-wrapper">
      <span class="iconfont">&#xe61b;</span>
      <span class="title">{{playInfo.songname}}</span>
    </div>
    <div class="name">
      <template
        v-for="(singer,index) in playInfo.singer"
      >{{singer.name}}{{index==playInfo.singer.length-1?"":"/"}}</template>
      -{{playInfo.songname}}
    </div>
  </div>
</template>
<script>
export default {
  props: ["playInfo"],
  data() {
    return {
      info: {
        title: "告白气球告白气球告白气球告白气球",
        name: "周杰伦"
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
.header-wrapper {
  padding-top: 10px;
}
.iconfont {
  font-size: 40px;
  float: left;
}
.title-wrapper {
  padding: 5px;
  overflow: hidden;
}
.title {
  font-size: 26px;
  font-weight: 200;
  display: block;
  margin: 0 60px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.name {
  text-align: center;
  padding: 0px 10px 10px 10px;
}
</style>