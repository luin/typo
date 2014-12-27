var utils = require('../lib/utils');

describe('utils', function() {
  describe('.findNearestString()', function() {
    it('should return the nearest string', function() {
      var array = ['abc', 'exsits', 'existsts', ''];
      var needle = 'exists';
      var result = utils.findNearestString(array, needle);
      expect(result).to.have.property('value', 'exsits');
      expect(result).to.have.property('distance', 2);
      expect(result).to.have.property('index', 1);
    });

    it('should return null if not found', function() {
      var array = ['abc', 'dbd', 'def'];
      var needle = 'exists';
      expect(utils.findNearestString(array, needle)).to.eql(null);
    });
  });
});
