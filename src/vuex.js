import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        moreAlertTitle: "",
        mediaUrl: "",
        currentPlayInfo: "",
        playState: true,
        currentPlayTime:0,
        playList:[],//播放列表。用来渲染“我的”播放列表
        audioObj:null
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
            state.playList.push(data);//播放列表
        },
        setPlayState(state, flag) {
            state.playState = flag;
        },
        setPlayTime(state,time){
            state.currentPlayTime=time;
        },
        setAudioObj(state,audio){
            state.audioObj=audio;
        }
    }
})