/** returns a function which should work like sum(a)(b) = a+b.
 *
 * @param {number} arg1
 * @return {function} A function which holds a closure to this function's variables
 */
function sumWithClosures(arg1) {
    /** A function which holds a closure to the outer variable and returns the sum of her own variable and the outer one.
     *
     * @param {number} arg2 A second argument for the sum
     * @return {number} The sum of the outer and own arguments
     */
    function inner(arg2) {
        return arg1 + arg2;
    }

    return inner;
}