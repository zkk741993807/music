import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

import MyInfo from "./components/myInfo"
import Rank from "./components/rank"
import Singer from "./components/singer"

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
            path:"/rank/:id",
            name:"ge",
        },
    ]
})