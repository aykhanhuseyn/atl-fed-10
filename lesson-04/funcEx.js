// function doSomething() {
// 	console.log(arguments);

// 	for (let i = 0; i < arguments.length; i++) {
// 		const element = arguments[i];
// 		console.log(element);
// 	}
// }

// doSomething(1, 2, 3);

// function sumAllArgs() {
// 	let sum = 0;

// 	for (let i = 0; i < arguments.length; i++) {
// 		if (typeof arguments[i] === 'number') {
// 			sum += arguments[i];
// 		}
// 	}

// 	return sum;
// }

// console.log(sumAllArgs(1, 2, 3, 'asdas', 4, 6, 7, NaN, 5));

// gets two arguments
const getSum = () => {
	let first = 0,
		second = 0;

	do {
		first = Number(prompt('give me first number'));
	} while (Number.isNaN(first));

	do {
		second = Number(prompt('give me second number'));
	} while (Number.isNaN(second));

	return first + second;
};

// console.log(getSum());
