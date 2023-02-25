// 4! => 1 * 2 * 3 * 4 => 24
// FACTORIAL FINDER
// 1. LOOP
// 2. RECURSION

// 4! => 4 * 3 * 2 * 1 => 24
// n => 4
// n * (n - 1) * (n - 2) * (n - 3)
// break when 1

// 1. factorial loop
// function factorial(number) {
// 	let result = 1;
// 	for (let i = 2; i <= number; i++) {
// 		result *= i;
// 	}
// 	return result;
// }

// 2. factorial recursion
// function factorial(number) {
// 	// debugger;
// 	if (number < 2) return 1;
// 	return number * factorial(number - 1);
// }

const array = [1, 2, 3, 4, 5, 3, 6, 2, 4, 1];
// 3. sum numbers in array
// function sum(arr) {
// 	let result = 0;
// 	arr.forEach((number) => {
// 		result += number;
// 	});
// 	return result;
// }

// 3.1 sum with reduce
// function sum(array) {
//   return array.reduce((sum, number) => sum + number, 0);
// }

// console.log(sum(array));

// 4. largest number
// function findMax(array) {
// 	let max = 0;
// 	array.forEach((number) => {
// 		if (number > max) {
// 			max = number;
// 		}
// 	});
// 	return max;
// }
// TODO: write this function with reduce

// 5. add even, mult odd
// function doSomething(array) {
// 	let add = 0,
// 		mult = 1;
// 	// debugger;
// 	array.forEach((number) => {
// 		if (number % 2 === 0) {
// 			add += number;
// 		} else {
// 			mult *= number;
// 		}
// 	});
// 	return add + mult;
// }

// 6. filter
// function findNumbers(arr, a, b) {
// 	return arr.filter((num) => num > a && num < b);
// }
// TODO: do filter manually

// TODO: 7
// For given duplicate array of numbers [1, 2, 1, 4, 4, 3, 2], find alone number
// indexOf()

// 8. Count
// const fruits = ['apple', 'banana', 'orange', 'apple'];
// function countFriuts(fruits) {
// 	const obj = {};

// 	fruits.forEach((fruit) => {
// 		if (obj[fruit]) {
// 			obj[fruit] = obj[fruit] + 1;
// 		} else {
// 			obj[fruit] = 1;
// 		}
// 	});

// 	return obj;
// }

// {
//   apple: 2,
//   banana: 1,
// }
