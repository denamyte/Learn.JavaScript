
describe('lastElementOfArray', function () {
    it('For an array with elements returns the last element', function () {
        assert.equal(lastElementOfArray(['apple', 'orange', 'grape']), 'grape');
    });
    it('For an undefined object returns undefined', function () {
        assert.equal(lastElementOfArray(undefined), undefined, 'The result is not undefined')
    });
    it('For an empty object returns undefined', function () {
        assert.equal(lastElementOfArray([]), undefined, 'The result is not undefined');
    });
});

describe('addNewElement', function () {
    it('For a defined array adds a new element at its end', function () {
        var ar = ['apple', 'orange'];
        var length1 = ar.length;
        addNewElement(ar, 'grape');
        var length2 = ar.length;
        assert.equal(length2 - length1, 1, 'The array length has not changed');
        assert.equal(ar[ar.length - 1], 'grape', 'The last element of the array is not the added element');
    });
    it('There is no effect for an undefined object', function () {
        var ar = undefined;
        addNewElement(ar, 'grape');
        assert.equal(ar, undefined);
    });
});

describe('arraySum', function () {
    it('Returns the sum of an array', function () {
        assert.equal(arraySum([1, 2, 3]), 6);
    });
});