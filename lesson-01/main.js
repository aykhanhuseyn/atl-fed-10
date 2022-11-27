// BOOLEAN
// true / false
let isSuccess = true;

// console.log(25 > 18);
console.log(typeof isSuccess); // 'boolean'

// response.statusCode === 400

// NULL data type
// is emplty value
// used to clear variable data
let data = null;
// sending request ...
isSuccess = true;
data = 'some data';
data = null;
console.log(typeof data); // 'object'

// UNDEFINED
// uninitialized vaiables
data = undefined;
console.log(typeof data); // 'undefined'

// NUMBER
let age = 25;
let year = 1918;
console.log(typeof age); // 'number'

// STRING
let fullName = 'john doe';
fullName = 'johnathan doeson';
fullName = `john is ${age} years old`;

console.log(fullName);
console.log(typeof fullName); // 'string'

// SYMBOL
let sym = Symbol.for('react');

console.log(sym);
console.log(typeof sym); // 'symbol'

// 
