
function Clock_1(options) {

    var template = options.template;
    var timer;

    function render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var min = date.getMinutes();
        if (min < 10) min = '0' + min;

        var sec = date.getSeconds();
        if (sec < 10) sec = '0' + sec;

        var output = template.replace('h', hours).replace('m', min).replace('s', sec);

        console.log(output);
    }

    this.stop = function() {
        clearInterval(timer);
    };

    this.start = function() {
        render();
        timer = setInterval(render, 1000);
    }

}

function Clock_1_proto(options) {
    this._template = options.template;
    this._timer;
}

Clock_1_proto.prototype.render = function () {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};

Clock_1_proto.prototype.stop = function () {
    clearInterval(this._timer);
};

Clock_1_proto.prototype.start = function () {
    this.render();
    var self = this;
    this._timer = setInterval(function() {
        self.render();
    }, 1000);
};