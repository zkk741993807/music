<template>
    <div >
        <ul class="menu-wrapper">
            <router-link tag="li" to="/rank" class="menu-item">
                <span class="iconfont">&#xe782;</span>
                <span>排行</span>
            </router-link>
            <router-link tag="li" to="/singer" class="menu-item">
                <span class="iconfont">&#xe619;</span>
                <span>歌手</span>
            </router-link>
            <router-link tag="li" to="/myInfo" class="menu-item">
                <span class="iconfont">&#xe64a;</span>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>
<script>

export default {
    
}
</script>
<style scoped>
    .exact{
        color:green;
    }
    .menu-wrapper{
        width:100%;
        height:100%;
        display: flex;
        background: #ccc;
    }
    .menu-item{
        flex-grow: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size:14px;
    }
    .menu-item .iconfont{
        font-size:22px;
    }
</style>