
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