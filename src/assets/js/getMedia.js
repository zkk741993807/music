import getvKey from "./getvKey";
export default function (songmid,strMediaMid,fn) {
    // console.log(songmid,strMediaMid)
    getvKey(songmid,strMediaMid,data=>{
        var url=`http://isure.stream.qqmusic.qq.com/C400${strMediaMid}.m4a?vkey=${data.data.items[0].vkey}&guid=969210432&uin=0&fromtag=66`;
        fn(url)
    })
}