<template>
  <div>
    <Slider v-model="value"></Slider>
    {{value}}
    <button @click="value++">add</button>
  </div>
</template>
<script>
import Slider from "../operation/slider";
export default {
  data() {
    return {
      value: 0
    };
  },
  components: {
    Slider
  }
};
</script>

<style scoped>
button {
  margin: 30px;
}
</style>