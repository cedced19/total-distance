# total-distance
A module to get the total distance from a list of points on the Earth.

[![Build Status](https://travis-ci.org/cedced19/total-distance.svg?branch=master)](https://travis-ci.org/cedced19/total-distance)

```javascript
var example = [{lat:48.7436408996582,lng:7.2582902908325195},{lat:48.74357223510742,lng:7.2582526206970215},{lat:48.74335479736328,lng:7.258235931396484}];

var totalDistance = require('total-distance');

totalDistance(example, 'lat', 'lng');
```