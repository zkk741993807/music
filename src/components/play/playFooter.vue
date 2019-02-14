<template>
    <div>
        <my-progress v-model="value"></my-progress>
        {{value}}
        <button @click="value++">add</button>
    </div>
</template>
<script>
import MyProgress from "../progress";
export default {
    data(){
        return {
            value:0
        }
    },
    components:{
        MyProgress
    }
}
</script>

<style scoped>
button{
    margin:30px;
}
</style>