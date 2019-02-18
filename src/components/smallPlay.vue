<template>
  <div>
    <div class="smllplay-wrapper">
      <div class="pic">
        <img src="../assets/img/1.jpg">
      </div>
      <div class="song-info">
        <span class="name">告白气球</span>
        <span class="singer">周杰伦-告白气球</span>
      </div>
      <div class="controller">
        <div class="play-pause" @click="isPlay=!isPlay">
          <span class="iconfont">{{isPlay ?"&#xe804;":"&#xe69d;"}}</span>
        </div>
      </div>
      <div class="controller">
        <div class="next">
          <span class="iconfont">&#xe7ff;</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            isPlay:true
        }
    }
};
</script>
<style scoped>
.smllplay-wrapper {
  display: flex;
  height: 100%;
  padding: 4px 18px;
  align-items: center;
}
.pic {
  padding: 6%;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}
.pic img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}
.song-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  margin-left: 10px;
}
.song-info .name {
  font-size: 18px;
}
.song-info .singer {
  color: #ccc;
  font-size: 14px;
}
.controller {
  width: 0px;
  height: 0px;
  padding:5%;
  background: #eee;
  border-radius: 50%;
  margin-left: 20px;
}
.controller  .play-pause , .next{
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.controller .iconfont {
  font-size: 22px;
  margin-top:5px;
}
</style>
