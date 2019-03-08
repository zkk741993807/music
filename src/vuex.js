import Vue from "vue";
import Vuex from "vuex";
import Storage from "./assets/util/storage"
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        headerHide: false,//歌手歌曲展示页面需要使header display：none 保证歌手图片底部开始显示
        moreAlertData: "",//点击歌曲列表后更多按钮后存储歌曲信息
        mediaUrl: "",
        currentPlayInfo: "",
        playState: true,//当前歌曲播放状态，true为播放，false为暂停
        currentPlayTime: 0,
        playList: [],//播放列表。
        loveList: [],//我的喜爱。
        songList: [],//我的歌单。
        singerSongList: [],//当前歌手歌曲列表
        type: "",//标记当前播放列表名
        rankList: [],
        audioObj: null,
        index: 0, //标记当前播放 "播放列表"中的index
    },
    mutations: {
        setHeaderHide(state, flag) {
            state.headerHide = flag;
        },
        showMoreAlert(state, data) {
            state.moreAlertData = data;
        },
        setIndex(state, index) {
            state.index = index;
        },
        setSingerSongList(state, data) {
            state.singerSongList = data;
        },
        setType(state, type) {//标记当前播放列表名
            state.type = type;
        },
        setRankList(state, data) {
            state.rankList = data;
        },
        setLoveList(state, data) {//喜爱歌曲列表
            var loveList = state.loveList;
            var length = loveList.length;
            var songid = data.songid;
            for (let i = 0; i < length; i++) {
                if (loveList[i].songid == songid) {
                    state.loveList.splice(i, 1);
                    return;
                }
            }
            state.loveList.push(data);
            Storage.setStorage("loveList",state.loveList)
        },
        setSongList(state, data) {//
            var songList = state.songList;
            var length = songList.length;
            var songid = data.songid;
            for (let i = 0; i < length; i++) {
                if (songList[i].songid == songid) {
                    // state.songList.splice(i, 1);
                    return;
                }
            }
            state.songList.push(data);
            Storage.setStorage("songList",state.songList)
        },
        setMediaUrl(state, url) {//当前播放歌曲url
            state.mediaUrl = url;
        },
        storageTosetPlayList(state, data) {//通过stroge获取的数据设置播放歌曲列表
            state.playList=data;//播放列表
        },
        storageTosetLoveList(state, data){
            state.loveList=data;
        },
        storagesetSongList(state, data){
            state.songList=data;
        },
        setCurrentPlayInfo(state, data) {//设置当前播放歌曲信息与播放列表
            state.currentPlayInfo = data;
            var playList = state.playList
            var length = playList.length;
            for (let i = 0; i < length; i++) {
                if (playList[i].songid == data.songid) {
                    return;
                }
            }
            state.playList.push(data);//播放列表
            Storage.setStorage("playList",state.playList)
        },
        setPlayState(state, flag) {//管理播放状态
            state.playState = flag;
        },
        setPlayTime(state, time) {//管理当前播放时间
            state.currentPlayTime = time;
        },
        setAudioObj(state, audio) {//管理audio对象
            state.audioObj = audio;
        }
    }
})