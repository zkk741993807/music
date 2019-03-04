import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

import MyInfo from "./components/myInfo"
import Rank from "./components/rank"
import Singer from "./components/singer"
import SingerSong from "./components/singer-song"
import MyList from "./components/myInfo/myList"
export default new VueRouter({
    mode:"history",
    linkExactActiveClass:"exact",
    linkActiveClass:"active",
    routes:[
        {
            path:"/",
            redirect:"/rank"
        },
        {
            path:"/rank",
            name:"rank",
            component:Rank
        },
        {
            path:"/singer",
            name:"singer",
            component:Singer
        },
        {
            path:"/singer/singer-song/:mid",
            name:"singerSong",
            component:SingerSong
        },
        {
            path:"/myInfo",
            name:"myInfo",
            component:MyInfo
        },
        {
            path:"/myInfo/:path",
            name:"myList",
            component:MyList
        }
        
    ]
})