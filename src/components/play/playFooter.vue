<template>
  <div>
    <div class="time-slider">
      <span class="time">{{playTime}}</span>
      <Slider v-model="value" :copyValue="copyValue" class="slider-component"></Slider>
      <span class="time">{{totalTime}}</span>
    </div>
    <play-operation></play-operation>
  </div>
</template>
<script>
import Slider from "../operation/slider";
import PlayOperation from "../operation/playOperation";
import { mapState } from "vuex";
import FormatTime from "../../assets/util/formatTime";
export default {
  data() {
    return {
      value: 0,
      playTime: 0,
      totalTime: 0,
      copyValue: 0
    };
  },
  watch: {
    currentPlayTime(value) {
      var percent = parseInt((value / this.audioTotalTime) * 100);
      this.copyValue = percent;
      this.playTime = FormatTime(value);
    },
    value(value) {
      this.audioObj.currentTime = (value / 100) * this.audioTotalTime;
    },
    audioTotalTime(time) {
      this.totalTime = FormatTime(time);
    }
  },
  methods: {},
  components: {
    Slider,
    PlayOperation
  },
  computed: {
    ...mapState({
      currentPlayTime: state => state.currentPlayTime,
      audioTotalTime: state => {
        var obj = state.audioObj;
        if (obj) {
          return obj.duration;
        }
      },
      audioObj: state => state.audioObj
    })
  }
};
</script>

<style scoped>
.time-slider {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.time {
  padding: 5px 8px;
  font-size: 16px;
  color: rgb(155, 150, 150);
}
.slider-component {
  flex-grow: 1;
  margin: 0px 10px;
}
</style>