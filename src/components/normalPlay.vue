<template>
    <div class="nomarlPlay-wrapper">
        <play-header class="play-header"></play-header>
        <play-content class="play-content"></play-content>
        <play-footer></play-footer>
    </div>
</template>

<script>
import PlayHeader from "./play/playHeader";
import PlayContent from "./play/playContent";
import PlayFooter from "./play/playFooter";
export default {
    data(){
        return {
            
        }
    },
    components:{
        PlayHeader,
        PlayContent,
        PlayFooter
    }
}
</script>
<style >
    .nomarlPlay-wrapper{
        display: flex;
        flex-direction: column;
        height:100vh;
    }
    .play-content{
        flex-grow: 1;
    }

</style>