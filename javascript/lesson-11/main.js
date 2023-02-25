// Array
// coxluq
// const array = [1, 5, 2, 7, 3, 4]; // 7
// index = 0 => 1
// index = 1 => 5
// index = 3 => 2
// ...
// index = 5 => 4

// array[0] ==> 1
// array[3] ==> 7

// RAM
// // 0x23a834 => array => 3kb

// const dumpArray = ['john', 25];

/**
 * name
 * surname
 */

const array = [];
// push adds to the last of array
array.push(1); // single element push
array.push(2, 3, 4); // multiple element push

// pop
array.pop(); // removes last element

array.length = 5; // removes element from n-th index
array.length = 0; // reset array

array.unshift(99); // adds single element to start of array
array.unshift(88, 77, 66, 55); // adds multiple elements to start of array
array.unshift(222);

array.shift(); // removes from start

array.sort(); // sorts array INPLACE default by character place in alphabet (ascii table)
array.sort((a, b) => a - b); // inceasing
array.sort((a, b) => b - a); // decreasing

console.log({ array });
// forEach
let sum = 0;
// array.forEach((element, index, itself) => {
// console.log({ element, index, itself });
// sum = sum + element + (itself[index + 1] || 0);
// });
// console.log({ sum });

// const a = array.map((element, index, itself) => {
// 	console.log({ element, index, itself });
// 	sum = sum + element + (itself[index + 1] || 0);
// 	return Math.random();
// });
// console.log({ a, sum });

// filter
// const a = array.filter((element, index, itself) => {
// 	return element > 76;
// });
// console.log({ a });
// find
// const a = array.find((element, index, itself) => {
// 	return element < 76;
// });
// console.log({ a });

// const a = array.some((element, index, itself) => {
// 	return element < 76;
// });
// const a = array.every((element, index, itself) => {
// 	return element > 44;
// });
// console.log({ a });

// includes
// const a = array.includes(55);
// const a = array.includes(55, 2);
// console.log({ a });

// reduce
// const a = array.reduce((accumlator, current, index, itself) => {
// 	console.log({ accumlator });
// 	return accumlator + current;
// }, 0);
// console.log({ a });

const d = data.reduce(
	(acc, curr) => {
		const [first, second = 0] = curr.address.zipcode.split('-');
		// console.log(curr.address.zipcode, first, second);
		acc.first += +first;
		acc.second += +second;
		return acc;
	},
	{ first: 0, second: 0 },
);
console.log({ d });

// Object
const person = {
	name: 'john',
	age: 25,
};
const car = {
	model: 'c200',
	brand: 'mercedes',
	hp: 2500,
};
//
// person['name'] ==> 'john'
// person['age'] ==> 25

// Function
