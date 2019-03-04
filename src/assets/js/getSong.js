import Jsonp from "../util/jsonp"
export default function (songerMid,page, fn) {
    var cb = "songCB"
    var url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=5381&jsonpCallback=${cb}&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid=${songerMid}&order=listen&begin=${page}&num=30&songstatus=1`;
    Jsonp(url, cb).then(res => {
        fn(res);
    }).catch(err => {
        console.log(err)
    })
}