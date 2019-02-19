import Jsonp from "../util/jsonp"
export default function (songmid,strMediaMid,fn) {
    var cb = "callBack"
    var url = `https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=5381&jsonpCallback=${cb}&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&callback=${cb}&uin=0&songmid=${songmid}&filename=C400${strMediaMid}.m4a&guid=969210432`;;
    Jsonp(url, cb).then(res => {
        fn(res);
    }).catch(err => {
        console.log(err)
    })
}
