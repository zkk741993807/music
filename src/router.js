import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

import MyInfo from "./components/myInfo"
import Rank from "./components/rank"
import Singer from "./components/singer"
import PlayedList from "./components/myInfo/playedList"
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
            component:Rank
        },
        {
            path:"/singer",
            component:Singer
        },
        {
            path:"/myInfo",
            component:MyInfo
        },
        {
            path:"/myInfo/played-list",
            name:"playedList",
            component:PlayedList
        }
    ]
})