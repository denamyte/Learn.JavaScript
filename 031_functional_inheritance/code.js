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

var task2 = {};

task2.Machine = function (power) {
    this._enabled = false;

    this.enable = function () {
        this._enabled = true;
    };

    this.disable = function () {
        this._enabled = false;
    };
};

task2.CoffeeMachine = function (power) {
    task2.Machine.apply(this, arguments);

    var waterAmount = 0;
    var timeout = null;

    var parentDisable = this.disable;
    this.disable = function () {
        parentDisable.call(this);
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
    };

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
            timeout = setTimeout(onReady, 1000);
        }
    };

};

var task3 = {};

task3.Machine = function (power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function () {
        self._enabled = true;
    };

    this.disable = function () {
        self._enabled = false;
    };
};

/**
 *
 * @param {number} power The power of the fridge
 * @constructor
 */
task3.Fridge = function (power) {
    task3.Machine.apply(this, arguments);

    var food = [];
    var capacity = Math.floor(power / 100);

    var self = this;

    this.addFood = function () {
        // Checking the fridge is enabled
        if (!this._enabled) {
            throw new Error("The fridge is not enabled!");
        }
        var newCapacity = food.length + arguments.length;

        if (newCapacity > capacity) {
            throw new Error("The fridge capacity exceeded! " + newCapacity + "/" + capacity);
        }
        for (var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]);
        }
    };

    this.getFood = function () {
        return food.slice(0);
    };

};