import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        moreAlertTitle: "",
        mediaUrl: "",
        currentPlayInfo: "",
        playState: true,
        currentPlayTime:0
    },
    mutations: {
        showMoreAlert(state, name) {
            state.moreAlertTitle = name;
        },
        setMediaUrl(state, url) {
            state.mediaUrl = url;
        },
        setCurrentPlayInfo(state, data) {
            state.currentPlayInfo = data;
        },
        setPlayState(state, flag) {
            console.log(flag)
            state.playState = flag;
        },
        setPlayTime(state,time){
            state.currentPlayTime=time;
        }
    }
})