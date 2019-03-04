function Move(el) {
    this.parent = el;
    this.el = el.children[0];
    this.x = 0;
    this.y = 0;
    this.startX = 0;
    this.startY = 0;
    this.distX = 0;
    this.distY = 0;
    this.pointX = 0;
    this.pointY = 0;
    this.startTime = 0;
    this.moved = false;
    this._init()
}
Move.prototype = {
    _init: function () {
        this.scrollMaxY = this.parent.clientHeight - this.el.clientHeight;
        this.scrollMaxX = this.parent.clientWidth - this.el.clientWidth;
        this._bindEvent();
    },
    _bindEvent() {
        var _this = this;
        this.el.addEventListener("touchstart", function (e) { _this._start.call(_this, e) }, false);
        this.el.addEventListener("touchmove", function (e) { _this._move.call(_this, e) }, false);
        this.el.addEventListener("touchend", function (e) { _this._end.call(_this, e) }, false);
    },
    _start: function (e) {
        var point = e.touches ? e.touches[0] : e;
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        this.startTime = new Date().getTime();
        this.startX = this.x;
        this.startY = this.y;
        this._transition();
    },
    _move: function (e) {
        var point = e.touches ? e.touches[0] : e,
            deltaX = point.pageX - this.pointX,
            deltaY = point.pageY - this.pointY,
            newX, newY,
            timestamp = new Date().getTime();

        newX = this.x + deltaX;
        newY = this.y + deltaY;
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        this.distX += deltaX;
        this.distY += deltaY;
        this.moved = true;

        if (newY > 0 || newY < this.scrollMaxY) {
            // newY = newY > 0 ? 0 : scrollMax;
            newY = this.y + deltaY / 3;
        }
        if (newX > 0 || newX < this.scrollMaxX) {
            // newY = newY > 0 ? 0 : scrollMax;
            newX = this.x + deltaX / 3;
        }
        this._translate(newX, newY);
    },
    _end: function () {
        this._transition(600)
        console.log(this.scrollMaxY)
        this.y = this.y > 0 ? 0 : this.scrollMaxY;
        this.x = this.x > 0 ? 0 : this.scrollMaxX;
        this._translate(this.x, this.y);
    },
    _translate: function (x, y) {
        this.el.style.transform = "translate(" + x + "px," + y + "px)";
        this.x = x;
        this.y = y;
    },
    _transition: function (time) {
        time = time || 0;
        this.el.style.transition = "all" + " " + time + "ms";
    }
}

export default Move;