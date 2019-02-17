<template>
  <div>
    <Slider v-model="value"></Slider>
    {{value}}
    <play-operation></play-operation>
  </div>
</template>
<script>
import Slider from "../operation/slider";
import PlayOperation from "../operation/playOperation";
export default {
  data() {
    return {
      value: 0
    };
  },
  components: {
    Slider,
    PlayOperation
  }
};
</script>

<style scoped>
button {
  margin: 30px;
}
</style>