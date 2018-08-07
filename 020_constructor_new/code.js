/** A simple calculator object
 *
 * @constructor
 */
function Calculator() {

    /**
     * The first argument for the calculator
     * @type {number}
     */
    this.arg1 = 0;
    /**
     * The second argument for the calculator
     * @type {number}
     */
    this.arg2 = 0;
    /**
     * Reads two numbers with the prompt function.
     */
    this.read = function () {
        this.arg1 = +prompt("Insert the first argument", 0);
        this.arg2 = +prompt("Insert the second argument", 0);
    };

    /**
     * Returns the sum of the two calculators's arguments
     * @returns {number}
     */
    this.sum = function () {
        return this.arg1 + this.arg2;
    };

    /**
     * Returns the product of the two calculator's arguments
     * @returns {number}
     */
    this.mul = function () {
        return this.arg1 * this.arg2;
    }

}

/** Accumulates inputted numbers into an inner sum buffer
 *
 * @param {number} startingValue
 * @constructor
 */
function Accumulator(startingValue) {

    /**
     * The inner buffer for storing the whole sum
     * @type {number}
     */
    this.value = startingValue;

    /**
     * Reads another number to add to the sum
     */
    this.read = function () {
        this.value += +prompt("Insert the next number", 0);
    };

}

