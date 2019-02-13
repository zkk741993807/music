<template>
    <div class="play">
        <small-play class="small-play"></small-play>
        <normal-play></normal-play>
    </div>
</template>
<script>
import SmallPlay from "./smallPlay"
import NormalPlay from "./normalPlay"
export default {
    components:{
        SmallPlay,
        NormalPlay
    }
}
</script>
<style scoped>
    .play{
        width:100vw;
        height:100vh;
        background: #fff;
    }

</style>
