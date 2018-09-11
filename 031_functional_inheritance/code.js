/**
 * @namespace
 */
var task1 = {};
task1.Machine = function (power) {
    this._enabled = false;

    this.enable = function () {
        this._enabled = true;
    };

    this.disable = function () {
        this._enabled = false;
    };
};

task1.CoffeeMachine = function (power) {
    task1.Machine.apply(this, arguments);

    var waterAmount = 0;

    this.setWaterAmount = function (amount) {
        waterAmount = amount;
    };

    function onReady() {
        alert('The coffee is ready!');
    }

    this.run = function () {
        if (!this._enabled) {
            alert("The Coffee Machine is not enabled!");
            throw new Error("The Coffee Machine is not enabled!");
        } else {
            setTimeout(onReady, 1000);
        }
    };

};