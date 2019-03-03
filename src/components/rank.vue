<template>
  <div class="rank-wrapper" @scroll="scroll">
    <ul ref="ul">
      <!-- <li class="rank-list-item" v-for=" item in songList" :key="item.cur_count">
        <a href="#" @click="play(item.data)">
          <div class="item-index">{{item.cur_count}}</div>
          <div class="item-info">
            <p class="list-song">{{item.data.songname}}</p>
            <span class="list-songer">
              <template
                v-for="(singer,index) in item.data.singer"
              >{{singer.name}}{{index==item.data.singer.length-1?"":"/"}}</template>
            </span>
          </div>
        </a>
        <div class="more" @click="moreBtn(item.data.songname)">
          <span class="iconfont">&#xe634;</span>
        </div>
      </li>-->
      <list-item
        v-for="(item,index) in songList"
        :index="index+1"
        :data="item.data"
        :key="index"
        @play="play"
        @moreBtn="moreBtn"
      ></list-item>
    </ul>
    <div class="loading">
      <div class="img-wrapper" v-show="songList.length!=300">
        <img src="../assets/img/loading.svg">
      </div>
      到底了！
    </div>
  </div>
</template>
<script>
//js
import getRank from "../assets/js/getRank";
import getMedia from "../assets/js/getMedia";
//components
import ListItem from "./listItem";
export default {
  name: "rank",
  data() {
    return {
      page: 0,
      songList: [],
      ulHeight: 0
    };
  },
  created() {
    this.getRankData(this.page);
  },
  watch: {
    page(page) {
      this.getRankData(this.page);
    }
  },
  updated() {
    this.ulHeight = this.$refs.ul.clientHeight;
  },
  methods: {
    getRankData(page) {
      getRank(page, data => {
        this.songList = this.songList.concat(data.songlist);
      });
    },
    moreBtn(name) {
      this.$store.commit("showMoreAlert", name);
    },
    play(data) {
      this.$store.commit("setCurrentPlayInfo", data);
      getMedia(data.songmid, data.strMediaMid, url => {
        this.$store.commit("setMediaUrl", url);
      });
    },
    scroll(e) {
      if (this.page == 9) {
        return;
      }
      var scrollTop = e.target.scrollTop;
      var wrapperHeight = e.target.clientHeight;
      console.log(scrollTop, this.ulHeight, wrapperHeight);
      if (this.ulHeight - scrollTop == wrapperHeight - 30) {
        this.page++;
        console.log(this.page);
      }
    }
  },
  components: {
    ListItem
  }
};
</script>
<style>
.rank-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.loading {
  text-align: center;
  height: 30px;
  overflow: hidden;
}
.img-wrapper img {
  height: 30px;
  height: 30px;
}
</style>