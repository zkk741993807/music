<template>
  <div class="singer-wrapper" @scroll="scroll">
    <div class="singer" ref="singer">
      <!-- abcd分类列表 -->
      <div class="singer-assortment" @click="changeItem" ref="assortment">
        <ul class="singer-index tag-item">
          <!--  -->
          <li
            ref="lineHeight"
            :data-index="item.id"
            :class="currentTags.index==item.id?'tag-selected':''"
            v-for="item in tags.index"
            :key="item.id"
          >{{item.name}}</li>
        </ul>

        <ul class="singer-area tag-item">
          <li
            :data-area="item.id"
            :class="currentTags.area==item.id?'tag-selected':''"
            class="area"
            v-for="item in tags.area"
            :key="item.id"
          >{{item.name}}</li>
        </ul>
        <ul class="singer-sex tag-item">
          <li
            :data-sex="item.id"
            class="id"
            :class="currentTags.sex==item.id?'tag-selected':''"
            v-for="item in tags.sex"
            :key="item.id"
          >{{item.name}}</li>
        </ul>
        <ul class="singer-genre tag-item">
          <li
            :data-genre="item.id"
            :class="currentTags.genre==item.id?'tag-selected':''"
            class="genre"
            v-for="item in tags.genre"
            :key="item.id"
          >{{item.name}}</li>
        </ul>
      </div>
      <!-- 歌手列表 -->
      <div class="singer-list-wrapper" :style="!show?{transform:style}:''">
        <span class="iconfont" @click="show=!show">{{show?"&#xe61a;":"&#xe61b;"}}</span>
        <div class="singer-list">
          <ul class="singer-container">
            <!-- js渲染 -->
            <router-link 
            tag="li"
            :to="{name:'singerSong',params:{mid:item.singer_mid}}"
            class="singer-pic-item" v-for="item in singerList" :key="item.singer_id">
              <a href="#">
                <div class="pic-container">
                  <img :src="item.singer_pic" @error="imgLoadError">
                </div>
              </a>
              <div class="singer-name">{{ item.singer_name }}</div>
            </router-link> 
          </ul>
        </div>
      </div>
    </div>
    <div class="loading">
      <div class="img-wrapper" v-show="singerList.length!=800">
        <img src="../assets/img/loading.svg">
      </div>
      到底了！
    </div>
  </div>
</template>
<script>
import getSinger from "../assets/js/getSinger";
import defaultImg from "../assets/img/defaultImg.png";
export default {
  name: "singer",
  data() {
    return {
      tags: {}, //包含的tag
      singerList: [],
      cur_page: 1,
      currentTags: {},
      show: true,
      style: "",
      singerHeight: 0
    };
  },
  watch: {
    currentTags: {
      handler: function(val, oldVal) {
        //this.getData(this.currentTags);
      },
      deep: true
    }
  },
  methods: {
    scroll(e) {
      if (this.cur_page == 10) {
        return;
      }
      var scrollTop = e.target.scrollTop;
      var wrapperHeight = e.target.clientHeight;
      if (scrollTop -30== this.singerHeight - wrapperHeight) {
        this.currentTags.sin = 80 * this.cur_page; //sin歌曲开始序号，一次80个歌手
        this.currentTags.cur_page = ++this.cur_page;
        this.getData(this.currentTags);
      }
    },
    changeItem(e) {
      var str = "index/area/id/sex/genre";
      var target = e.target;
      if (target.nodeName == "LI") {
        for (var prop in target.dataset) {
          if (str.includes(prop)) {
            var id = parseInt(target.dataset[prop]);
            this.currentTags[prop] = id;
            this.getData(this.currentTags);
            break;
          }
        }
      }
    },
    getData(options) {
      getSinger(options, data => {
        console.log(data);
        data = data.singerList.data;
        this.tags = data.tags;
        this.singerList = this.singerList.concat(data.singerlist);
        for (var prop in data) {
          if (typeof data[prop] !== "object") {
            this.$set(this.currentTags, prop, data[prop]);
          }
        }
      });
    },
    imgLoadError(e) {
      //歌手图片404报错
      e.target.src = defaultImg;
    }
  },
  created() {
    this.getData(this.currentTags);
  },
  updated() {
    this.singerHeight = this.$refs.singer.clientHeight;
    if (this.style) {
      // return;
    }
    var lineHeight = this.$refs.lineHeight[0].offsetHeight; //分类第一行，用于折叠分类
    this.style =
      "translateY(-" +
      (this.$refs.assortment.offsetHeight - lineHeight) +
      "px)";
  }
};
</script>
<style scoped>
.iconfont {
  text-align: center;
  font-size: 24px;
  display: block;
}

.singer-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-y: scroll;
}
.singer {
  width: 100%;
}
.singer-assortment {
  box-sizing: border-box;
  width: 100%;
  padding-left: 22px;
  overflow: hidden;
}

.singer-list-wrapper {
  transition: all 0.2s;
  background: #eee;
}
.singer .animation {
  transform: translateY(-260px);
}
.singer-assortment li {
  margin: 0px 7px 14px 0px;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  color: #000;
  font-size: 14px;
  padding: 0px 5px;
}
.tag-item a:first-child {
  margin-right: 20px;
}
.tag-item .tag-selected {
  background-color: #31c27c;
  color: #fff;
}
.singer-list {
  box-sizing: border-box;
  padding: 0px 10px;
  width: 100%;
  padding-top: 10px;
}
.singer-container::after {
  content: "";
  display: block;
  clear: both;
}
.singer-pic-item {
  width: calc(100% / 4);
  float: left;
  text-align: center;
  padding: 5px 0 14px 0px;
}
.singer-pic-item a {
  display: inline-block;
  width: 70%;
  height: 100%;
}
.pic-container {
  display: inline-block;
  width: 100%;
  height: 0px;
  padding-top: 100%;
  position: relative;
}

.pic-container img {
  box-shadow: 0 0 4px 3px #ccc;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.singer-name {
  font-size: 12px;
  height: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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