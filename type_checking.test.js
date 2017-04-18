// Create the function type which takes the argument val and returns val's type
// as a string. If possible, type should return additional information

function type(val) {
  if(typeof val === 'undefined') return 'Undefined';
  if(typeof val === 'boolean') return 'Boolean';
  if(typeof val === 'function') return 'Function';
  if(typeof val === 'number'){
    if(isNaN(val)) return 'Number NaN';
    if(!isFinite(val)) return 'Number Infinite';
    if(Math.floor(val) === val) return 'Number Integer';
    else return 'Number Float';
  }
  if(typeof val === 'string'){
    if(isNaN(Number(val))) return 'String';
    return 'String Numeric';
  }
  if(typeof val === 'object'){
    if(val === null) return 'Null';
    var val_str = Object.prototype.toString.call(val).split(' ')[1].split(']')[0];
    if(val_str === 'Object' || val_str === 'Error') return val.constructor.name;
    return val_str;
  }
}

test('type', () => {
  expect(type(undefined)).toBe("Undefined");
  expect(type(null)).toBe("Null")
  expect(type(true)).toBe("Boolean")
  expect(type(function(){})).toBe("Function")
  expect(type(Math.min)).toBe("Function")
  expect(type('null')).toBe("String")
  expect(type({test: "object"})).toBe("Object")

  expect(type(1)).toBe("Number Integer")
  expect(type(1.1)).toBe("Number Float")
  expect(type(NaN)).toBe("Number NaN")
  expect(type(-Infinity)).toBe("Number Infinite")

  expect(type('1')).toBe("String Numeric")
  expect(type('1.1')).toBe("String Numeric")
  expect(type('0xF')).toBe("String Numeric")
  expect(type(/a/)).toBe("RegExp")
  expect(type([1])).toBe("Array")
  function Custom(){}
  expect(type(new Custom())).toBe("Custom")
});
