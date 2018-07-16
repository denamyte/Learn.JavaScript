/** Gets the last element of a array
 *
 * @param {Array.<string>} ar An array for obtaining the last element
 * @returns {string} The last element of an array
 */
function lastElementOfArray(ar) {
    if (!ar || !ar.length) {
        return undefined;
    }
    return ar[ar.length - 1];
}

/** Adds a new element into an array
 *
 * @param {Array} ar An array into wich a new element should be added
 * @param elem A new element to be added into the array
 */
function addNewElement(ar, elem) {
    if (ar && ar.length >= 0) {
        ar.push(elem);
    }
}

/** Computes the sum of an array of numbers
 *
 * @param {Array.<number>} ar The array of numbers
 * @returns {number} The sum of an array
 */
function arraySum(ar) {
    var sum = 0;
    if (ar && ar.length) {
        for (var i = 0; i < ar.length; i++) {
            sum += ar[i];
        }
    }
    return sum;

}

