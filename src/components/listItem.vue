<template>
  <li class="rank-list-item">
    <a href="#" @click="play(data)">
      <div class="item-index">{{index}}</div>
      <div class="item-info">
        <p class="list-song">{{data.songname}}</p>
        <span class="list-songer">
          <template
            v-for="(singer,i) in data.singer"
          >{{singer.name}}{{i==data.singer.length-1?"":"/"}}</template>
        </span>
      </div>
    </a>
    <div class="more" @click="moreBtn(data)">
      <span class="iconfont">&#xe634;</span>
    </div>
  </li>
</template>
<script>
import getMedia from "../assets/js/getMedia";
export default {
  props: ["index", "data"],
  data() {
    return {
      songIndex:0,
    };
  },
  methods: {
    moreBtn(name) {
      this.$store.commit("showMoreAlert", name);
    },
    play(data) {
      this.$store.commit("setIndex", this.index - 1);
      this.$store.commit("setCurrentPlayInfo", data);
      getMedia(data.songmid, data.strMediaMid, url => {
        this.$store.commit("setMediaUrl", url);
      });
    }
  },
  created() {}
};
</script>
<style scoped>
.rank-list-item {
  box-sizing: border-box;
  width: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
}
.rank-list-item a {
  overflow: hidden;
  flex-grow: 1;
  text-decoration: none;
  color: #000;
  height: 100%;
  display: flex;
  align-items: center;
}
.item-index {
  font-size: 16px;
  padding: 8px 12px;
  color: #666;
}
.item-info {
  flex-grow: 1;
  overflow: hidden;
  padding: 8px 0px;
  border-bottom: 1px solid #ddd;
}
.more {
  font-size: 20px;
  padding: 0px 7px;
}
.more .iconfont {
  font-size: 24px;
}
.list-song {
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list-songer {
  font-size: 12px;
  color: #aaa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

