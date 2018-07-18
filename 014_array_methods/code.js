/**Adds the word in a words string, if that words string does not yet contain it
 *
 * @param {string} words String of space-separated words
 * @param {string} word A word to be added into words
 * @returns {string} a new string with the new word added
 */
function addNonexistentWord(words, word) {
    if ((words || words === '') && word) {
        if (!~words.split(" ").indexOf(word)) {
            return words + (words.length ? " " : "") + word;
        }
    }
    return words;
}

/** Adds cls into the obj.className string if this property does not yet contain it
 *
 * @param {Object} obj An object which should contain field 'className'
 * @param {string} cls A class string to be added
 */
function addClass(obj, cls) {
    if (!obj || obj.className === undefined || !cls) return;
    obj.className = addNonexistentWord(obj.className, cls);
}