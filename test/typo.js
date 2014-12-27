var typo = require('../lib/typo');

describe('typo', function() {
  describe('.wrap()', function() {
    it('should wrap an object', function() {
      var obj = { abc: 1, xyz: 2 };
      var wrappedObj = typo.wrap(obj);
      expect(wrappedObj.abcd).to.eql(1);
    });

    it('should leave the wrapped object untouched', function() {
      var obj = { abc: 1, xyz: 2 };
      typo.wrap(obj);
      expect(obj.abcd).to.eql(undefined);
    });

    it('should return the original method if exists', function() {
      var obj = { abc: 1, xyz: 2 };
      var wrappedObj = typo.wrap(obj);
      expect(wrappedObj.abc).to.eql(1);
    });
  });
});
