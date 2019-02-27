import Jsonp from "../util/jsonp"

export default function (tags, fn) {
    var cb = "callBack"
    var option = { "area": -100, "sex": -100, "genre": -100, "index": -100, "sin": 0, "cur_page": 1 };
    if (typeof tags == "object") {
        for (var prop in tags) {
            option[prop] = tags[prop]
        }
    }
    console.log(option)
    var url = `https://u.y.qq.com/cgi-bin/musicu.fcg?callback=${cb}&g_tk=5381&jsonpCallback=${cb}&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data={"comm":{"ct":24,"cv":10000},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":${option["area"]},"sex":${option["sex"]},"genre":${option["genre"]},"index":${option["index"]},"sin":${option["sin"]},"cur_page":${option["cur_page"]}}}}`;
    url = window.encodeURI(url);
    Jsonp(url, cb).then(res => {
        fn(res);
    }).catch(err => {
        console.log(err)
    })
}
