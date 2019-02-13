<template>
  <div class="header-wrapper">
    <div class="title-wrapper">
      <span class="iconfont">&#xe61b;</span>
      <span class="title">{{info.title}}</span>
    </div>
    <div class="name">{{info.name}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {
        title: "告白气球告白气球告白气球告白气球",
        name: "周杰伦"
      }
    };
  },
  methods:{
  }
};
</script>

<style scoped>
.header-wrapper {
  padding-top: 20px;
}
.iconfont {
  font-size: 40px;
  float: left;
}
.title-wrapper{
    padding:5px;
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
.name{
    text-align: center;
    padding:10px 10px;
}
.index{
    text-align: center;
    font-size: 0px;
}
.index-item{
    display: inline-block;
    width:5px;
    height:5px;
    border-radius: 50%;
    background: #bbb;

}
.index-item:nth-child(1){
    margin-right:10px;
}
.index-active{
    width:7px;
    height:7px;
    background: #888;
}
</style>