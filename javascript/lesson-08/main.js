// es6, es7
// ECMA
// Ecma

// // set, map
// const array = new Array();
// array.push(1); // O(1)
// array.length; // O(1)
// array.includes(1); // O(n)
// // no delete
// array.pop(); // O(1)
// array.forEach;
// // multiple for loops
// // { 0: 1 } => []
// array.push(1, 2, 3, 4, 4, 4, 4, 4);
// // array is duplicateable
// Object.entries(array); // [["0", 1], ["1", 2],...]
// array[5];
// array.at(5);

// const set = new Set();
// set.add(1); // O(1)
// set.size; // O(1)
// set.has(1); // O(1)
// set.delete(1); // O(1)
// // no pop
// set.forEach;
// // only one loop
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(4);
// set.add(4);
// set.add(4);
// // set is unique
// set.values();

// set.entries(); // [[1,1], [2,2],...]

// const map = new Map();
// const obj = new Object();
// map.set(1, 'jkd');
// map.get(1);
// const o1 = {},
// 	o2 = {};
// map.set(o1, 'object 1 value');
// map.set(o2, 'object 2 value');

// obj[o1] = 'salam';
// obj[o2] = 'sag ol';
// obj[{}] = 'salam sag olu itirdi';

// Map is like Object

// console.log({ array, set, map });

// CONCLUSION
// you can use Set when you need unique values
// you can use Map whan you need non-string keys
// also whan you need speed

// // inherit
// const person = {
// 	fin: 'XXXXXX',
// 	name: 'John',
// 	surname: 'Doe',
// 	toString: function () {
// 		return `${this.name} ${this.surname}`;
// 	},
// };

// // const employee = Object.create(person);
// const employee = {
// 	ssn: 234789,
// 	duty: 'watchman',
// };
// employee.__proto__ = person;

// const director = {
// 	duty: 'director',
// 	hasKeyOfHersey: true,
// };
// director.__proto__ = employee;

// console.log({ person, employee });

// Array.prototype.__proto__ === Object.prototype; // true
// Number.prototype.__proto__ === Object.prototype; // true
// String.prototype.__proto__ === Object.prototype; // true
// // Object.create({})
// // __proto__

// var yetim = Object.create(null);

// var yeti = {};
// yeti.__proto__ = null;

// new
// new.target
// with function and class

// this && self
// this is function itself when called with new
// 'use strict';
// this is undefined inside function in strict mode
// so self is more secure way to call window

// new Function
function Person(firstname, secondname, birthYear) {
	// if (!new.target) {
	// 	throw new Error('New ile cagir');
	// }

	this.name = firstname;
	this.surname = secondname;
	this.createdAt = Date.now();
	this.age = new Date().getFullYear() - birthYear;
	this.greet = () => {
		return 'I am ' + this.name + ' ' + this.surname;
	};
}
// {name, surname, greet, createdAt}
