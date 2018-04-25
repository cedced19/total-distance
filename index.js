var distanceBtwPoints = require('distance-between-points');

module.exports = function (list, latLabel, lngLabel) {
    var d = 0;
    for (var i = 0; i < list.length-1; i++) {
        d += distanceBtwPoints(list[i], list[i+1], latLabel, lngLabel);
    }
    d += distanceBtwPoints(list[0], list[list.length-1], latLabel, lngLabel);
    return d;
};