// Array

let arr = [
	'Yan',
	'Fev',
	'Mar',
	'Apr',
	'May',
	'Iyn',
	'Iyl',
	'Avq',
	'Sen',
	'Okt',
	'Noy',
	'Dek',
];

// JOIN
// console.log(String(arr), arr.join());
// String(arr) ==> arr.join()
// arr.join(',')
// arr.join('-')

// SPLIT
// takes Separator
// returns array
// OPPOSITE of JOIN

// SLICE
// take slice of array
// arr.slice();
// takes 2 args
// start (index), end (index)
// return []
// TODO: make a function slice period of year

// SPLICE
// start (index), count (number), ...item (element type)
// MODIFIES GIVEN ARRAY
// return selected array []

// INDEXOF
arr.indexOf();
// searchElement (), startIndex (index)
// found => index
// else => -1

// CONCAT
// concats arrays
// return new array
// arr.concat(arr)

// FILL
// value, start (index), end (index)
// modifies given array

// DESTRUCTURING & REST & SPREAD
// // SPREAD
// ...
// let a = ['john', 'elton'], b = ['steve', 'jobs'];
// ['jackson', ...a, 'michel', ...b]
// ['jackson'].concat(a).concat(['michel']).concat(b)

// // REST
// 1. function f () { console.log(arguments) }
// 2. function f (...args) { console.log(args) }
// 3. function f (first, ...rest) { console.log(firt, rest) }
// f(1,2,3,'a', 'b', 'c', [], {})

// TODO: for students
// function calc (operator, ...args) {
// }
// calc('+', 1,3,45,56,87,8,4)

// FIND
// return single element
// arr.find((element) => element.at(-1) === 'r')
// CALLBACK takes (element, index, array)
// CALLBACK return boolean

// FILTER
// return array or matched
// CALLBACK return boolean
// arr.filter((element, index, array) => element.at(0) === 'A');

// MAP
// return new array
// bbb.map((el) => Math.round(el * 82) / 100)
// CALLBACK return element of new array

// FOREACH
// same as map, but does not have return
