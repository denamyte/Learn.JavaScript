describe("sumWithClosures", function() {
    it("For arguments 1 and 2 returns 3", function() {
        assert.equal(sumWithClosures(1)(2), 3);
    });

    it("For arguments 5 and -1 returns 4", function() {
        assert.equal(sumWithClosures(5)(-1), 4);
    });

    it("For arguments -10 and -20 returns -30", function() {
        assert.equal(sumWithClosures(-10)(-20), -30);
    });

});
