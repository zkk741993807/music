<template>
  <div id="app">
    <my-header class="header"></my-header>
    <my-content class="content"></my-content>
    <my-footer class="footer" ref="footer"></my-footer>
    <play class="play" ref="play" :style="{transform}"></play>
    <more-alert v-if="moreAlertTitle" class="more-alert"></more-alert>
  </div>
</template>

<script>
import MyHeader from "./header";
import MyContent from "./content";
import MyFooter from "./footer";
import MoreAlert from "./moreAlert";
import Play from "./components/play";
import { mapState } from "vuex";
import DropDown from "./assets/util/dropDown";
import getMedia from "./assets/js/getMedia"
export default {
  name: "app",
  data() {
    return {
      clientHeight: document.body.clientHeight,
      transform: "translate(0, 0)"
    };
  },
  created(){
    //var mediaUrl=getMedia(songmid,strMediaMid)
  },
  computed: {
    ...mapState({
      moreAlertTitle: state => state.moreAlertTitle
    })
  },
  components: {
    MyHeader,
    MyContent,
    MyFooter,
    MoreAlert,
    Play
  },
  mounted() {
    var play = this.$refs.play;
    var smallPlay = play.$children[0].$el;
    var normallPlay = play.$children[1].$el;
    var footer = this.$refs.footer.$el;
    var smallPlayHeight = smallPlay.offsetHeight;
    var footerHeight = footer.offsetHeight;
    var percent =
      100 - ((footerHeight + smallPlayHeight) / this.clientHeight) * 100;
    this.transform = "translate(0," + percent + "%)";
    new DropDown(smallPlay, play.$el, footerHeight, function(dis) {
      var temp = this.clientHeight - dis - smallPlayHeight - footerHeight;
      smallPlay.style.opacity = 1 - temp / 100;
      footer.style.opacity = 1 - temp / 100;
      footer.style.zIndex = dis; //让footer衬与底层避免点击到
      normallPlay.style.opacity = temp / 100;
    });
  }
};
</script>

<style>
@import url("./reset.css");
@import url("./assets/font/iconfont.css");

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: #eee;
  overflow: hidden;
}
.header {
  height: 60px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.content {
  flex-grow: 1;
  padding: 0px 8px;
  overflow: scroll;
}
.footer {
  height: 60px;
  flex-shrink: 0;
  z-index: 1;
}
.play {
  position: absolute;
  /* transform: translate(0, 90%); */
}
.more-alert {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(80, 80, 80, 0.2);
}
</style>
