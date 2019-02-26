export default function (time) {//formatTime
    time = Math.floor(time);
    var min, sec;
    min = "0" + Math.floor(time / 60);
    min = min.substr(min.length - 2);
    sec = "0" + time % 60;
    sec = sec.substr(sec.length - 2);
    return min + ":" + sec;
}