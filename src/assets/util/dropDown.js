function DropDown(side, obj, height, fn) {
    this.el = obj;
    this.side = side;
    this.height = height + this.side.offsetHeight;
    this.clientHeight = document.body.clientHeight;
    this.lastTime = 0;
    this.startPosY = 0;
    this.startPosX = 0;
    this.startBind = null;
    this.moveBind = null;
    this.endBind = null;
    this.currentPosition = "bottom"//判定el是全显示还是隐藏到下部
    this.over = true; //判断elastic动画是否完成
    this.fn = fn || function () { };
    this.init();
}
DropDown.prototype.init = function () {
    this.startBind = this.start.bind(this);
    this.moveBind = this.move.bind(this);
    this.endBind = this.end.bind(this);
    document.addEventListener("touchstart", this.startBind);
    console.log(this.el)
}
DropDown.prototype.start = function (e) {
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

    this.startPosY = e.changedTouches[0].clientY + (currentPos == 0 ? 0 : this.height);
    this.startPosX = e.changedTouches[0].clientX
    this.lastTime = new Date().getTime();
    this.el.addEventListener("touchmove", this.moveBind);
}
DropDown.prototype.move = function (e) {
    if (!this.over) {
        return;
    }
    var movePosY = e.changedTouches[0].clientY;
    var movePosX = e.changedTouches[0].clientX;
    var disY = this.startPosY - movePosY;
    var disX = this.startPosX - movePosX;
    if(Math.abs(disY)<Math.abs(disX)){
        return ;
    }
    if (this.currentPosition == "top" && disY < 0 ||
        this.currentPosition == "bottom" && disY - this.height > 0) {//保证el在铺满屏也就是在top状态下不能上划
        var m = (this.clientHeight - disY) % this.clientHeight;      //el 隐藏在下方时也就是bottom状态下不能下划
        console.log(1)
        if (m <= this.clientHeight - this.height) {
            this.el.style.transform = "translate(0px," + m + "px)";
        }
        document.addEventListener("touchend", this.endBind);
        this.fn(m);
    }
}
DropDown.prototype.end = function (e) {
    console.log(2)
    if (!this.over) {
        return;
    }
    var endPosY = e.changedTouches[0].clientY;
    // var endPosX = e.changedTouches[0].clientX;
    var newTime = new Date().getTime();
    var time = newTime - this.lastTime;
    var diffPosY = this.startPosY - endPosY;
    // var diffPosX = this.startPosX - endPosX;
    var absDiffPosY = Math.abs(diffPosY);
    var ratioValue = absDiffPosY / time * 10;//滑动速度
    //console.log(diffPos)
    if (ratioValue>4&&ratioValue < 10) {
        if (absDiffPosY <= this.clientHeight / 2) {
            diffPosY = -diffPosY;
        }
    }
    this.elastic(diffPosY);
}
DropDown.prototype.getCurrentPosition = function () {
    return this.currentPos;
}
DropDown.prototype.getTransform = function () {
    var reg = /\d.*\d/
    var str = window.getComputedStyle(this.el, false)["transform"];
    return str.match(reg)[0].split(",");
}
DropDown.prototype.elastic = function (flag) {
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
            _this.over = true;
            _this.el.removeEventListener("touchmove", _this.moveBind);
            document.removeEventListener("touchend", _this.endBind);//确定动画完成
        } else {
            obj.style.transform = "translate(0," + (currentPos + speed) + "px)"
            _this.fn(currentPos + speed)
        }
    }, 30)
}
export default DropDown;