
function inputUntilNumber(query, initial) {
    do {
        var input = prompt(query, initial === undefined ? 0 : initial);
        if (isNumeric(input)) return +input;
        alert("Your input '" + input + "' is not numeric");
    } while (true);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}