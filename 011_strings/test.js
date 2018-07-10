
describe("ucFirst", function() {
    it('Uppercases the first symbol', function() {
        assert.strictEqual(ucFirst("john"), "John");
    });

    it("Doesn't die on an empty string", function() {
        assert.strictEqual(ucFirst(""), "");
    });
});

describe("checkSpam", function() {
    it('finds spam in "buy ViAgRA now"', function() {
        assert.isTrue(checkSpam('buy ViAgRA now', ['viagra', 'XXX']));
    });

    it('finds spam in "free xxxxx"', function() {
        assert.isTrue(checkSpam('free xxxxx', ['viagra', 'XXX']));
    });

    it('no spam in "innocent rabbit"', function() {
        assert.isFalse(checkSpam('innocent rabbit', ['viagra', 'XXX']));
    });
});