Typo
=============
妈妈再也不用担心我写错属性（方法）名啦！

![Build Status](https://travis-ci.org/luin/typo.svg?branch=master)
[![Code Climate](https://codeclimate.com/github/luin/typo/badges/gpa.svg)](https://codeclimate.com/github/luin/typo)
[![Test Coverage](https://codeclimate.com/github/luin/typo/badges/coverage.svg)](https://codeclimate.com/github/luin/typo)
[![Dependency Status](https://david-dm.org/luin/typo.svg)](https://david-dm.org/luin/typo)

Install
-------

```shell
npm install node-typo
```

To use this module you must be running node 0.11.13 or higher for proxy support

Usage
-----

```javascript
var typo = require('node-typo');
var fs = typo.wrap(require('fs'));

console.log(fs.exist === fs.exists); // true
console.log(fs.exsit === fs.exists); // true
console.log(fs.exsiiiiit === fs.exists); // false
```

WARN
----

DON'T USE THIS MODULE IN PRODUCTION
