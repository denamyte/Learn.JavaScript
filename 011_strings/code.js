function ucFirst(str) {
    return !str ? "" : str.charAt(0).toUpperCase() + str.slice(1);
}

/** Checks if str contains strings from the spamArray
 * @param {string} str string to check for spam
 * @param {Array} spamArray an array of spam words
 * @returns {boolean}
 */
function checkSpam(str, spamArray) {
    if (!str && !spamArray && !spamArray.length) return false;
    var lower = str.toLowerCase();
    for (var i in spamArray) {
        if (~lower.indexOf(spamArray[i].toLowerCase())) {
            return true;
        }
    }
    return false;
}