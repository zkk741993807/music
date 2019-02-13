<template>
  <div>myinfo
    <div></div>
    <div class="list-wrapper">
      <ul>
        <li class="list-item">
          <div class="pic">
            <!-- <img  src="../assets/img/defaultImg.png"> -->
          </div>
          <div class="des">
            <span class="title">播放列表</span>
            <span class="num">0首</span>
          </div>
          <div class="more">
              <span class="iconfont">&#xe629;</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.list-item {
  display: flex;
}
.pic {
  width: 0px;
  height: 0px;
  padding: 10%;
  background-image: url("../assets/img/defaultImg.png");
  background-size: 100% 100%;
}
.des{
    flex-grow:1;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
}
.title, .num{
    margin-left:20px;
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
</style>
