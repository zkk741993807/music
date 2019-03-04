<template>
  <div>
    <div class="singer-list">
      <ul class="singer-container">
        <!-- js渲染 -->
        <li class="songer-pic-item">
          <a href="./html/songer.html?singer_mid=0013RsPD3Xs0FG">
            <div class="pic-container">
              <img src="http://y.gtimg.cn/music/photo_new/T001R150x150M0000013RsPD3Xs0FG.webp">
            </div>
          </a>
          <div class="songer-name">半阳</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
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
  width: calc(100% / 3);
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
</style>
