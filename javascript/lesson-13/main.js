/**
 * guard clauses
 * 
 * if (limit > 5) {
     return 'hello';
   } else {
     return 'bye';
   }
 * if (limit > 5) {
     return 'hello';
   }
   return 'bye';
 */

// function
function getFibonacciClassic(limit) {} // 1
const getFib = (limit) => {}; // 2
const getFibo = function getFibonacci(limit) {}; // 3
const getFibon = function (limit) {}; // 4

function whoAreYou(callback) {
	if (typeof callback === 'function') {
		switch (callback.name) {
			case 'getFibonacciClassic':
				console.log('netersen ae');
				break;
			case 'getFib':
				console.log('netersen qadanalem');
				break;
			case 'getFibonacci':
				console.log('hayindi seen cozoo yim');
				break;
			case 'getFibon':
				console.log('netersen ayqam');
				break;
			default:
				console.log('salam');
		}
	}
}

// Parameter VS Argument
// argument
function whatIsThis(a, b = 1, c = 2) {
	if (arguments.length === 0) {
		a = 55;
	}
	// parameter
	// arguments => Arguments
	console.log({ a, b, c }, arguments);
}
whatIsThis(1, 2, 3);

function len3(a, b, c) {}
function lenwWithDef(a, b = 1, c = 2) {}
function lenwWithDef2(a = 0, b = 1, c = 2) {}
function lenwWithDef3(a = 0, b, c) {}
// DONT PUT DEFAULT PARAMENTERS FIRST

// REST PARAMETERS
function instedOfArguments(...params) {
	console.log({ params, arguments });
}
function aliBabaAndFourtyQuldurs(aliBaba, ...fourtyQuldur) {
	console.log({ aliBaba, fourtyQuldur });
}
function piratesOfCarribean(jackSparrow, willTurner, ...matroslar) {
	console.log({ jackSparrow, willTurner, matroslar });
}

// Generator and generatorFunction
function* generatorFunction() {
	console.log('hi');
	yield 1; // pause
	console.log('hello');
	yield 2; // pause
	console.log('bye');
	yield 3; // pause
	console.log('finished');
}
const generator = generatorFunction();

// generator.next();

// fibonacci numbers
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
// length 14

function* fibonacci(limit) {
	yield 0;
	yield 1;
	let first = 0,
		secod = 1,
		index = 2,
		periousSecond = 0;
	while (index < limit) {
		// swappingdkjfghkjdfh
		periousSecond = secod;
		secod = first + secod;
		first = periousSecond;
		index++;
		yield secod;
	}
}
var gen = fibonacci(14);
// gen.next();

// array iterators
const array = [1, 2, 3, 4, 5, 6];
const arrayIterator = array[Symbol.iterator]();
// arrayIterator.next();

// async
async function getEmployees() {}

getEmployees();
// Promise<"pending">
fetch('google.com')
	.then((response) => response.json())
	.then((data) => {
		// datani map ele goster ekranda
	});

async function anonimus() {
	const data = await (await fetch('https://google.com')).json();
	// datani gotur sellen
}

// async
// for (let i = 0; i < 10; i++) {}

// for await (const key of obj) {
// }

//
const obj = {
	name: 'fsdfsd',
	age: 25,
	[Symbol.for('id')]: '12312', //
	[Symbol.toPrimitive]: () => 1, // 1 + obj === 2
	[Symbol.toStringTag]: 'Ayxan', // [object Ayxan]
};

// Symbol('id')

Array.isArray([]); // true
Array.isArray({}); // false

typeof [] === typeof {}; // 'object'

//

fetch('https://jsonplaceholder.typicode.com/users/111')
	.finally(() => console.log('final 1'))
	.then((res) => {
		if (res.status === 404) {
			console.log('salam ay dunya');
		}
		return res.json();
	})
	.then((data) => console.log(data?.name))
	.catch((error) => {
		console.log('message', error?.message);
	})
	.finally(() => console.log('final 2'));

async function getUser(id) {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
		if (res.status === 404) {
			console.log('vallah tapammadim', res);
		}
		const data = await res.json();

		console.log('try', data);
	} catch (error) {
		console.log('catch', error);
	}
}
