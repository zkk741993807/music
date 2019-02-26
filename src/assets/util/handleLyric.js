import getLyric from "../js/getLyric";
import utf8 from "utf8";
export default function (songid,fn) {
    getLyric(songid, lyric => {
        lyric=utf8.decode(atob(lyric.lyric));
        fn(LyricArr(lyric));
    })
}

function LyricArr(lyric) {
    var lyricArr=[];
    var arr = lyric.split("\n");
    arr.forEach(ele=>{
        var arr=getLyricInfo(ele);
        arr.lyric&&lyricArr.push(arr);
    })
    return lyricArr;
}

function getLyricInfo(str) {
    var reg = /\[(.*):(.*)\]/.exec(str);
    var tag = RegExp.$1,
        lyric = RegExp.$2;
    if (isNaN(tag)&&lyric!=0) {
        return {
            tag,
            lyric
        }
    }
    reg = /\[(\d*):(\d*\.\d*)\](.*)/.exec(str);
    var min = Number(RegExp.$1),
        sec = Number(RegExp.$2),
        lyric = RegExp.$3;
    return {
        tag: (min * 60 + sec).toFixed(2),
        lyric: lyric
    }
}