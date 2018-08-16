
function inputUntilNumberWithConditions(query, gtNumber, gteNumber, isInteger, initial) {
    do {
        var number = inputUntilNumber(query, initial === undefined ? 1 : initial);
        if (isNumeric(gtNumber) && number <= gtNumber) {
            alert("Your number is not greater than " + gtNumber);
            continue;
        }
        if (gteNumber && number < gtNumber) {
            alert("Your number is not greater than or equal to " + gteNumber);
            continue;
        }
        if (isInteger && number !== Math.round(number)) {
            alert("Your number is not integer");
            continue;
        }
        return number;
    } while (true);
}

function inputUntilNumber(query, initial) {
    do {
        var input = prompt(query === undefined ? "Input a number" : query, initial === undefined ? 0 : initial);
        if (isNumeric(input)) return +input;
        alert("Your input '" + input + "' is not numeric");
    } while (true);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/** Returns a pseudo-random number from a [min, max] range
 *
 * @param {number} min
 * @param {number} max
 */
function randomInRangeIncl(min, max) {
    return min + Math.floor(Math.random() * (max + 1 - min));
}

/** Returns the class of an arbitrary object
 *
 * @param {any} obj An arbitrary object
 * @returns {string} A string representing the class of an object
 */
function getClass(obj) {
    return {}.toString.call(obj).slice(8, -1);
}