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