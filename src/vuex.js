import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        moreAlertTitle: "",
        mediaUrl:"",
        currentPlayInfo:""
    },
    mutations: {
        showMoreAlert(state,name) {
            state.moreAlertTitle = name;
        },
        setMediaUrl(state,url){
            state.mediaUrl=url;
        },
        setCurrentPlayInfo(state,data){
            state.currentPlayInfo=data;
        }
    }
})