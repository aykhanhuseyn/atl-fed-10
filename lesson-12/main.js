// Object
// - descructuring
const object = {};
// object.name = 'John'       O(1)
// object.surname = 'John'    O(1)
// delete object.name         O(1)

// HashMap
// hashFunc(propName) => ilanQurbaga
// jsdfhkjs
// sflsdfkjsj

// md5
// sha256
// password => 12345 => hash(12345, secretKey) => HASH

// const array = new Array<Number>(5);
// // 0x223 => 32
// // 0x223 + (32 * 5)

const person = {
	name: 'John',
	age: 25,
	birthYear: 123,
	isAdmin: true,
	referance: {
		id: '123',
		name: 'another object',
	},
};

const personClone = person;

personClone === person; // true // same referance

person.name = 'Ali';
personClone.name; // Ali;

// this is inheritance
// not cloning
const realPersonClone = Object.create(person);

const realPersonCloneSpread = { ...person };
// { }
// { ...person }
// { name: person.name, age: presin.age, referance: person.referance, ... }

person === realPersonCloneSpread; // false
Object.is(person, realPersonCloneSpread); // false

Object.is(NaN, NaN); // true

'asds' - 1; // NaN
'asds' - 1 === NaN; // false

NaN === NaN; // false

Object.is('asds' - 1, NaN); // true

//
// const partialPerson = { ...person };
// delete partialPerson.name;

const name = 'dsada';

let {
	name: personName,
	age: personAge,
	referance: salam,
	arastun,
	...partialPerson
} = person;

// let personName = person.name;
// let personAge = person.age;
// let partialPerson = {...person};
// delete partialPerson.name;
// delete partialPerson.age;

// array
// - descructuring
// push     O(1)
// pop      O(1)
// unshift  O(n)
// shift    O(n)

// [1,2,3]
// {0: 1, 1: 2, 2: 3}

// [2,3]
// {0: 2, 1: 3}

const array = ['john', 12, 1999];

let [a, b, c, d] = array;
// let a = array[0]; // 'john'
// let b = array[1]; // 12
// let c = array[2]; // 1999
// let d = array[3]; // udefined

console.log({ a, b, c, d });

let { 2: e } = array;

console.log({ e });

// Function
// - async
// - generator
