import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        moreAlertTitle: "",
        mediaUrl:""
    },
    mutations: {
        showMoreAlert(state,name) {
            state.moreAlertTitle = name;
        },
        setMediaUrl(state,url){
            state.mediaUrl=url;
        }
    },
    actions:{
        setMediaUrl(state,url){
            state.commit("setMediaUrl",url)
        }
    }
})