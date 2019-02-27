<template>
  <div class="rank-wrapper" @scroll="scroll">
    <ul ref="ul">
      <li class="rank-list-item" v-for=" item in songList" :key="item.cur_count">
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
        <div class="more" @click="changeMoreAlertState(item.data.songname)">
          <span class="iconfont">&#xe634;</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import getRank from "../assets/js/getRank";
import getMedia from "../assets/js/getMedia";
export default {
  data() {
    return {
      page: 0,
      songList: [],
      ulHeight: 0
    };
  },
  created() {
    this.getRankData(this.page)
  },
  watch: {
    page(page) {
      console.log("w", this.page);
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
    changeMoreAlertState(name) {
      this.$store.commit("showMoreAlert", name);
    },
    play(data) {
      this.$store.commit("setCurrentPlayInfo", data);
      getMedia(data.songmid, data.strMediaMid, url => {
        this.$store.commit("setMediaUrl", url);
      });
    },
    scroll(e) {
      if(this.page==9){
        return ;
      }
      var scrollTop = e.target.scrollTop;
      var wrapperHeight = e.target.clientHeight;
      if (scrollTop == this.ulHeight - wrapperHeight) {
        this.page++;
        console.log(this.page)
      }
    }
  }
};
</script>
<style>
.rank-wrapper {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
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
  /* border:1px solid red; */
}
.list-songer {
  font-size: 12px;
  color: #aaa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>