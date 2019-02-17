<template>
  <div id="app">
    <my-header class="header"></my-header>
    <my-content class="content"></my-content>
    <my-footer class="footer"></my-footer>
    <play class="play" ref="play">
    </play>
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
export default {
  name: "app",
  data() {
    return {};
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
    // DropDown(this.$refs);
    var play = this.$refs.play;
    var children=play.$children.$el;
    console.log(this.$refs);
    new DropDown(children, play.$el);
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
  overflow: hidden;
}
.footer {
  height: 60px;
  flex-shrink: 0;
  z-index: 1000;
}
.play {
  position: absolute;
  transform: translate(0, 80%);
}
.more-alert {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(80, 80, 80, 0.2);
}
</style>
