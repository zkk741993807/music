<template>
  <div>
    <div class="search-wrapper">
      <span class="iconfont">&#xe604;</span>
      <input type="text" placeholder="搜索歌曲、歌手" v-model="inputValue">
      <span class="iconfont" @click="clearText">&#xe625;</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    clearText() {
      this.inputValue = "";
    }
  }
};
</script>
<style scoped>
.search-wrapper {
  width: 100%;
  height: 70%;
  background: rgba(90, 90, 90, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 18px;
}
.iconfont {
  margin-top: 4px;
  padding: 0px 7px;
  font-size: 24px;
}
input {
  height: 100%;
  border: none;
  outline: none;
  flex-grow: 1;
  font-size: 18px;
  background: none;
}
</style>


