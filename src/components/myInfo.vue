<template>
  <div>
    <div class="list-wrapper">
      <ul>
        <router-link tag="li"  :to="{name:'playedList'}" class="list-item">
          <div class="pic">
            <!-- <img  src="../assets/img/defaultImg.png"> -->
          </div>
          <div class="des">
            <span class="title">播放列表</span>
            <span class="num">{{playedListNum}}首</span>
          </div>
          <div class="more">
              <span class="iconfont">&#xe629;</span>
          </div>
        </router-link >
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex"
export default {
  computed: {
    ...mapState({
      playedListNum:state=>state.playList.length
    })
  },
};
</script>
<style scoped>
.list-item {
  display: flex;
  background: #fff;
}
.pic {
  width: 0px;
  height: 0px;
  padding: 8%;
  margin:8px;
  background-image: url("../assets/img/defaultImg.png");
  background-size: 100% 100%;
}
.des{
    flex-grow:1;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
}
.num{
    font-size: 14px;
    color:slategray;
}
.more{
    display: flex;
    justify-content: center;
    align-items: center;
}
.iconfont{
  padding:0 7px;
}
</style>
