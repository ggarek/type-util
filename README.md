# typeutil.js

_typeutil_ is simple library for type checking

## Example

```javascript
var Type = require('typeutil');

// Assertion utility
function assert(){
  /* ... */
}

assert.isNotNaNNumber = function (value){
  if(!Type.isNumber(value)){
    throw new TypeError("assertion failed: value should be of type 'Number'");
  }
  if(isNan(value)){
    throw new TypeError("assertion failed: value should not be NaN");
  }
}

// Simple function
function sum(a,b) {
  assert.isNotNaNNumber(a);
  assert.isNotNaNNumber(b);

  return a + b;
}
```

## License

(The MIT License)

Copyright (c) 2014 Ovsyannikov Igor &lt;garek@mail.ru&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.