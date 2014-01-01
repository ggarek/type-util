/**
 * Module defines utility methods to check type of variable
 */
(function () {
  /**
   * Shorthands
   */
  var op = Object.prototype,
      toStr = op.toString,
      k;
  
  /**
   * Types enumeration
   */
  var Types = {
    Number    : '[object Number]',
    String    : '[object String]',
    Object    : '[object Object]',
    Arguments : '[object Arguments]',
    RegExp    : '[object RegExp]',
    Function  : '[object Function]',
    Error     : '[object Error]',
    Boolean   : '[object Boolean]',
    Null      : '[object Null]',
    Undefined : '[object Undefined]'
  };
  
  /**
   * Object used to declare methods for type checking
   */
  var Type = {};
  
  /**
   * Generate method 'is[Type]' for each type
   */
  for(k in Types) {
    if(!Types.hasOwnProperty(k)){
      continue;
    }
    Type['is' + k] = (function(typeName){ 
      return function (value) {
        return toStr.call(value) === typeName; 
      };
    }(Types[k]));
  }
  
  if (typeof window != 'undefined') {
    window.Type = Type;
  } else if(module && module.exports){
    module.exports = Type;
  }
  
  return Type;
}());