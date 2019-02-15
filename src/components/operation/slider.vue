<template>
  <div class="progress">
    <div class="progress-wrapper" ref="sliderwrapper">
      <div class="slider" :style="style">
        <div class="slider-button" @touchstart.stop="start" @touchend="end"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["value"],
  data() {
    return {
      style: { width: "0%" },
      sliderWidth: 0,
      disX: 0,
      lastWidth: 0
    };
  },
  watch: {
    value(value) {
      this.setValue(value);
    }
  },
  methods: {
    start(e) {
      this.disX = e.targetTouches[0].clientX;
      this.lastWidth = parseInt(this.style.width);
      this.move();
    },
    move() {
      console.log("move");
      document.addEventListener("touchmove", this.moveFn);
    },
    end() {
      document.removeEventListener("touchmove", this.moveFn);
    },
    moveFn(event) {
      var distanceX = event.targetTouches[0].clientX - this.disX;
      var percent = parseInt(distanceX / this.sliderWidth * 100);
      var value = this.lastWidth + percent;
      this.setValue(value);
    },
    setValue(value) {
      if (value > 100) {
        value = 100;
      }
      if (value < 0) {
        value = 0;
      }
      this.style.width = value + "%";
      this.$emit("input", value);
    },
    getValue() {
      return this.style.width;
    }
  },
  mounted() {
    this.sliderWidth = this.$refs.sliderwrapper.offsetWidth;
  }
};
</script>
<style scoped>
.progress {
  width: 300px;
  margin: 0 auto;
}
.progress-wrapper {
  height: 6px;
  background: #ccc;
  position: relative;
  border-radius: 3px;
}
.slider {
  height: 100%;
  width: 100%;
  background: #409eff;
  position: absolute;
  border-radius: 3px;
}
.slider-button {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  border: solid 2px #409eff;
  background: #fff;
  border-radius: 50%;
  right: -10px;
}
</style>