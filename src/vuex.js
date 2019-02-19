import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        moreAlertTitle: "",
        songmid:"",
        strMediaMid:""
    },
    mutations: {
        showMoreAlert(state,name) {
            state.moreAlertTitle = name;
        }
    }
})