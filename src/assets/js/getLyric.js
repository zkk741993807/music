import Jsonp from "../util/jsonp"
export default function (songid,fn) {
    var cb = "lyricCB"
    var url = `https://api.darlin.me/music/lyric/${songid}/?callback=${cb}`;
    Jsonp(url, cb).then(res => {
        console.log(res)
        fn(res);
    }).catch(err => {
        console.log(err)
    })
}