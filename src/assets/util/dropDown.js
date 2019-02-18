function DropDown(side, obj,height) {
    this.el = obj;
    this.side = side;
    this.height=height+this.side.offsetHeight;
    this.clientHeight = document.body.clientHeight;
    this.lastTime = null;
    this.startPos = null;
    this.startBind = null;
    this.moveBind = null;
    this.endBind = null;
    this.currentPosition = "bottom"//判定el是全显示还是隐藏到下部
    this.over = true; //判断elastic动画是否完成
    this.init();
}
DropDown.prototype.init = function () {
    this.startBind = this.start.bind(this);
    this.moveBind = this.move.bind(this);
    this.endBind = this.end.bind(this);
    console.log(this.side)
    this.el.addEventListener("touchstart", this.startBind);

}
DropDown.prototype.start = function (e) {
    console.log(this.over)
    if (!this.over) {
        return;
    }
    clearInterval(this.el.time);
    var currentPos = parseInt(this.getTransform(this.el)[5]);
    if (currentPos == 0) {
        this.currentPosition = "top";
    } else {
        this.currentPosition = "bottom";
    }
    console.log(e)
    if (this.side.contains(e.target)&&this.currentPosition == "bottom" || this.currentPosition == "top") {
        console.log(1)
        this.startPos = e.changedTouches[0].clientY+this.height;
        this.lastTime = new Date().getTime();
        this.el.addEventListener("touchmove", this.moveBind);

    }
}
DropDown.prototype.move = function (e) {
    if (!this.over) {
        return;
    }
    var movePos = e.changedTouches[0].clientY;
    var dis = this.startPos - movePos;
    console.log(dis);
    if (this.currentPosition == "top" && dis < 0 || this.currentPosition == "bottom" && dis > 0) {//保证el在铺满屏也就是在top状态下不能上划
        var m = (this.clientHeight - dis) % this.clientHeight;                                    //el 隐藏在下方时也就是bottom状态下不能下划
        this.el.style.transform = "translate(0px," + m + "px)";
        this.el.addEventListener("touchend", this.endBind);
    }
}
DropDown.prototype.end = function (e) {
    if (!this.over) {
        return;
    }
    var endPos = e.changedTouches[0].clientY;
    var newTime = new Date().getTime();
    var time = newTime - this.lastTime;
    var diffPos = this.startPos - endPos;
    var absDiffPos = Math.abs(diffPos);
    var ratioValue = absDiffPos / time * 10;//滑动速度
    if (ratioValue < 8) {
        if (absDiffPos <= this.clientHeight / 2) {
            diffPos = -diffPos;
        }
    }
    this.elastic(diffPos, function () {
        this.over = true;
        this.el.removeEventListener("touchmove", this.moveBind);
        this.el.removeEventListener("touchend", this.endBind);
    });
}
DropDown.prototype.getCurrentPosition=function(){
    return this.currentPos;
}
DropDown.prototype.getTransform = function () {
    var reg = /\d.*\d/
    var str = window.getComputedStyle(this.el, false)["transform"];
    return str.match(reg)[0].split(",");
}
DropDown.prototype.elastic = function (flag, fn) {
    this.over = false;
    var targetPos = flag > 0 ? 0 : this.clientHeight - this.height;//判断是向上滑还是向下滑
    var _this = this;
    var obj = this.el;
    obj.time = setInterval(function () {
        var currentPos = parseInt(_this.getTransform(obj)[5]);
        var speed = (targetPos - currentPos) / 2;
        speed = speed < 0 ? Math.floor(speed) : Math.ceil(speed);
        if (!speed || currentPos == targetPos) {
            obj.style.transform = "translate(0," + targetPos + "px)"
            clearInterval(obj.time);
            fn && fn.call(_this)//确定动画完成
        } else {
            obj.style.transform = "translate(0," + (currentPos + speed) + "px)"
        }
    }, 30)
}
 export default DropDown;