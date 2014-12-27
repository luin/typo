var Proxy = require('harmony-proxy');
var utils = require('./utils');

var skipProperties = ['constructor', 'inspect'];
exports.wrap = function(obj) {
  return new Proxy(obj, {
    get: function(receiver, name) {
      if (typeof obj[name] === 'undefined' && skipProperties.indexOf(name) === -1) {
        var result = utils.findNearestString(Object.keys(obj), name);
        return result ? obj[result.value] : void 0;
      } else {
        return obj[name];
      }
    }
  });
};
