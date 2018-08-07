/** A multi-callable function with numeric arguments. Returns the sum of all the arguments.
 *
 * @param {number} arg1
 * @returns {function(*): function(*)} A function which can be called multiple times.
 */
function multiBracketsSum(arg1) {

    var currSum = arg1 || 0;

    /**
     *
     * @param arg2
     * @returns {function(*)} A function which can be called multiple times.
     */
    function inner(arg2) {
        currSum += arg2;
        return inner;
    }

    inner.toString = function () {
        return currSum;
    };

    return inner;
}