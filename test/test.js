/**
 * Thoughts: 
 *  - Think of generating part of the tests with grunt or similar tool. (#isObject, #isFunction etc.)
 */
var assert = require('assert');
var Type = require('../lib/typeutil');

describe('Type', function() {
  describe('#module loading', function () {
    it('should export Object', function () {
      assert(Type instanceof Object);
    });
    
    it('should contain method isObject', function () {
      assert(Type.isObject instanceof Function);
    });
    
    it('should contain method isNumber', function () {
      assert(Type.isNumber instanceof Function);
    });
    
    it('should contain method isString', function () {
      assert(Type.isString instanceof Function);
    });
    
    it('should contain method isRegExp', function () {
      assert(Type.isRegExp instanceof Function);
    });
    
    it('should contain method isArguments', function () {
      assert(Type.isArguments instanceof Function);
    });
    
    it('should contain method isFunction', function () {
      assert(Type.isFunction instanceof Function);
    });
    
    it('should contain method isError', function () {
      assert(Type.isError instanceof Function);
    });
  });

  describe('#isObject', function () {
    it('should return true when value is of type Object', function () {
      assert(Type.isObject({}));
      assert(Type.isObject(new Object()));
      assert(Type.isObject({ a : 1, b : 2 }));
    });
    
    it('should return false when value is more specific', function () {
      assert(Type.isObject('') === false);
      assert(Type.isObject(5) === false);
      assert(Type.isObject(/\d+/g) === false);
      assert(Type.isObject(new Error()) === false);
      assert(Type.isObject(function () {}) === false);
      assert(Type.isObject(new Function()) === false);
      assert(Type.isObject(null) === false);
      assert(Type.isObject(undefined) === false);
    });
  });
  
  describe('#isString', function () {
    it('should return true when value is of type String', function () {
      assert(Type.isString(''));
      assert(Type.isString('asdasd'));
      assert(Type.isString(new String('asasd')));
    });
    
    it('should return false when value is of other type', function () {
      assert(Type.isString({}) === false);
      assert(Type.isString(new Object()) === false);
      assert(Type.isString(5) === false);
      assert(Type.isString(/\d+/g) === false);
      assert(Type.isString(new Error()) === false);
      assert(Type.isString(function () {}) === false);
      assert(Type.isString(new Function()) === false);
      assert(Type.isString(null) === false);
      assert(Type.isString(undefined) === false);
    });
  });

  describe('#isNumber', function () {
    it('should return true when value is of type Number', function () {
      assert(Type.isNumber(5));
      assert(Type.isNumber(-5));
      assert(Type.isNumber(0.5));
      assert(Type.isNumber(new Number()));
      assert(Type.isNumber(new Number(5)));
      assert(Type.isNumber(NaN));
    });
    
    it('should return false when value is of other type', function () {
      assert(Type.isNumber({}) === false);
      assert(Type.isNumber(new Object()) === false);
      assert(Type.isNumber('') === false);
      assert(Type.isNumber(/\d+/g) === false);
      assert(Type.isNumber(new Error()) === false);
      assert(Type.isNumber(function () {}) === false);
      assert(Type.isNumber(new Function()) === false);
      assert(Type.isNumber(null) === false);
      assert(Type.isNumber(undefined) === false);
    });
  });
  
  describe('#isRegExp', function () {
    it('should return true when value is of type RegExp', function () {
      assert(Type.isRegExp(/\d/));
      assert(Type.isRegExp(/\w/g));
      assert(Type.isRegExp(new RegExp()));
    });
    
    it('should return false when value is of other type', function () {
      assert(Type.isRegExp({}) === false);
      assert(Type.isRegExp(new Object()) === false);
      assert(Type.isRegExp('') === false);
      assert(Type.isRegExp(5) === false);
      assert(Type.isRegExp(new Error()) === false);
      assert(Type.isRegExp(function () {}) === false);
      assert(Type.isRegExp(new Function()) === false);
      assert(Type.isRegExp(null) === false);
      assert(Type.isRegExp(undefined) === false);
    });
  });
  
  describe('#isFunction', function () {
    it('should return true when value is of type Function', function () {
      assert(Type.isFunction(function () {}));
      assert(Type.isFunction(new Function));
      assert(Type.isFunction(Type.isFunction));
    });
    
    it('should return false when value is of other type', function () {
      assert(Type.isFunction({}) === false);
      assert(Type.isFunction(new Object()) === false);
      assert(Type.isFunction('') === false);
      assert(Type.isFunction(5) === false);
      assert(Type.isFunction(new Error()) === false);
      assert(Type.isFunction(/\d+/gmi) === false);
      assert(Type.isFunction(null) === false);
      assert(Type.isFunction(undefined) === false);
    });
  });

  describe('#isError', function () {
    it('should return true when value is of type Error', function () {
      assert(Type.isError(new Error()));
      assert(Type.isError(new TypeError()));
    });
    
    it('should return false when value is of other type', function () {
      assert(Type.isError({}) === false);
      assert(Type.isError(new Object()) === false);
      assert(Type.isError('') === false);
      assert(Type.isError(5) === false);
      assert(Type.isError(function () {}) === false);
      assert(Type.isError(/\d+/gmi) === false);
      assert(Type.isError(null) === false);
      assert(Type.isError(undefined) === false);
    });
  });
  
  describe('#isArguments', function () {
    it('should return true when value is of type Arguments', function () {
      (function (a,b,c){
        assert(Type.isArguments(arguments));
      }(1,2,3));
    });
    
    it('should return false when value is of other type', function () {
      assert(Type.isArguments({}) === false);
      assert(Type.isArguments(new Object()) === false);
      assert(Type.isArguments('') === false);
      assert(Type.isArguments(5) === false);
      assert(Type.isArguments(function () {}) === false);
      assert(Type.isArguments(/\d+/gmi) === false);
      assert(Type.isArguments(null) === false);
      assert(Type.isArguments(undefined) === false);
    });
  });
  
  describe('#isBoolean', function () {
    it('should return true when value is of type Boolean', function () {
      assert(Type.isBoolean(true));
      assert(Type.isBoolean(false));
      assert(Type.isBoolean(new Boolean()));
    });
    
    it('should return false when value is of other type', function () {
      assert(Type.isBoolean({}) === false);
      assert(Type.isBoolean(new Object()) === false);
      assert(Type.isBoolean('') === false);
      assert(Type.isBoolean(5) === false);
      assert(Type.isBoolean(function () {}) === false);
      assert(Type.isBoolean(/\d+/gmi) === false);
      assert(Type.isBoolean(null) === false);
      assert(Type.isBoolean(undefined) === false);
    });
  });
  
  describe('#isNull', function () {
    it('should return true when value is null', function () {
      assert(Type.isNull(null));
    });
    
    it('should return false when value is of other type', function () {
      assert(Type.isNull({}) === false);
      assert(Type.isNull(new Object()) === false);
      assert(Type.isNull('') === false);
      assert(Type.isNull(5) === false);
      assert(Type.isNull(function () {}) === false);
      assert(Type.isNull(/\d+/gmi) === false);
      assert(Type.isNull(undefined) === false);
    });
  });
  
  describe('#isUndefined', function () {
    it('should return true when value is undefined', function () {
      assert(Type.isUndefined(undefined));
    });
    
    it('should return false when value is of other type', function () {
      assert(Type.isUndefined({}) === false);
      assert(Type.isUndefined(new Object()) === false);
      assert(Type.isUndefined('') === false);
      assert(Type.isUndefined(5) === false);
      assert(Type.isUndefined(function () {}) === false);
      assert(Type.isUndefined(/\d+/gmi) === false);
      assert(Type.isUndefined(null) === false);
    });
  });
});