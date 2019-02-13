import Jsonp from "../util/jsonp"
export default function (page,fn) {
    var cb = "callBack"
    var url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018_34&topid=26&type=top&song_begin=${page * 30}&song_num=30&g_tk=5381&jsonpCallback=${cb}&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0`;
    Jsonp(url, cb).then(res => {
        fn(res);
    }).catch(err => {
        console.log(err)
    })
}

