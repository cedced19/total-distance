
var totalDistance = require('../');

var assert = require('assert');

var example = require('../example.json');

describe('Test the function', function () {
    
    it('should get the right distance', function () {
        var d = totalDistance(example);
        assert.equal(d, 4848);
    });
    
});
