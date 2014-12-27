var natural = require('natural');

exports.findNearestString = function(array, str) {
  var min = {};
  array.forEach(function(item, index) {
    var distance = natural.LevenshteinDistance(item, str);
    if (item[0] === str[0] &&
        (typeof min.index === 'undefined' || distance < min.distance)) {
      min.index = index;
      min.distance = distance;
      min.value = item;
    }
  });
  if (typeof min.distance === 'undefined' || min.distance > 3) {
    return null;
  }
  return min;
};
