/**
 * Prints subsequently into the console numbers from 1 to 20, with an interval 100 ms
 */
function printNumbersInterval() {
    var maxCount = 20;
    var curCount = 0;

    var timerId = setInterval(function () {
        curCount++;
        if (curCount <= 20) {
            console.log(curCount);
        } else {
            clearInterval(timerId);
        }
    }, 100);
}

function printNumbersTimeout() {
    var maxCount = 20;
    var curCount = 0;

    setTimeout(function log() {
        curCount++;
        console.log(curCount);
        if (curCount < 20) {
            setTimeout(log, 100);
        }
    }, 100);

}

/** Returns a function wrapper over the function f. When invoked, the wrapper function
 * invokes the f function in ms milliseconds.
 *
 * @param {function} f - A function to be wrapped in a delayed function
 * @param {number} ms - A delay, in milliseconds, to delay invoking of the initial function.
 * @returns {function} A delayed function wrapper.
 */
function delay(f, ms) {
    return function () {
        var self = this;
        var args = arguments;
        setTimeout(function () {
            f.apply(self, args);
        }, ms);
    }
}

/**
 *
 * @param {function} f A function to be bounced
 * @param {number} ms A timeout to bounce the function f
 */
function debounce(f, ms) {
    // TODO Write the code
}