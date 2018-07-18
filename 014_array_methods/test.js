describe("addClass", function() {

    it("adds a nonexistent class", function() {
        var obj = {
            className: 'open menu'
        };
        addClass(obj, 'new');
        assert.deepEqual(obj, {
            className: 'open menu new'
        });
    });

    it("doesn't add an existent class", function() {
        var obj = {
            className: 'open menu'
        };
        addClass(obj, 'open');
        assert.deepEqual(obj, {
            className: 'open menu'
        });
    });

    it("doesn't add extra spaces for a nonexistent class", function() {
        var obj = {
            className: ''
        };
        addClass(obj, 'open');
        assert.deepEqual(obj, {
            className: 'open'
        });
    });

});

