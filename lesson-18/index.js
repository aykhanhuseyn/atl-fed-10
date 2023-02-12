// import _ from 'lodash';
// _.map([1, 2, 3, 4, 5], (item) => item * 2);

// const _ = require('lodash');
// _.map([1, 2, 3, 4, 5], (item) => item * 2);

const { map, find, clone, cloneDeep, filter } = require('lodash');

const arr = [1, 2, 3, 4, 5];
const arr2 = {};

const arr3 = map(arr2, (item) => item * 2);
console.log('arr3', arr3);

const arr4 = arr2?.map?.((item) => item * 2) ?? [];
console.log('arr4', arr4);

const people = [
	{
		name: 'John',
		age: 20,
	},
	{
		name: 'Jane',
		age: 21,
	},
	{
		name: 'Jack',
		age: 22,
	},
];

// const ages = people.map((person) => person.age);
const ages = map(people, 'age');
console.log('ages', ages);

// const age21Person = people.find((person) => person.age === 21);
const age21Person = find(people, { age: 21 });
console.log('age21Person', age21Person);

// null && 1 -> null

// ||
// && short circuiting
// ?? nullish coaliscing

// yarn

// pnpm

// npm

const obj = {
	name: 'John',
	age: 20,
	address: {
		city: 'New York',
		country: 'USA',
	},
	skills: ['js', 'html', 'css'],
	langages: new Set(['js', 'html', 'css']),
};

// assign reference
const obj2 = obj;
console.log('=== obj obj2', obj === obj2, obj, obj2);

// clone shallow - assign reference in nested parameters
// const obj3 = { ...obj }; // ==> { name: obj.name, age: obj.age, address: obj.address };
const obj3 = clone(obj); // ==> { name: obj.name, age: obj.age, address: obj.address };
const obj4 = cloneDeep(obj);
console.log('=== obj obj3', obj === obj3, obj, obj3);

console.log('=== empty', {} === {});

console.log('=== obj vs obj3 shallow clone', obj.address === obj3.address);

console.log('=== obj vs obj4 deep clone', obj.address === obj4.address);
console.log('=== obj vs obj4 deep clone', obj.skills === obj4.skills);

const cloneDeepGeydirme = (obj) => JSON.parse(JSON.stringify(obj));
const obj5 = cloneDeepGeydirme(obj);

console.log({ obj, obj4, obj5 });

const movies = [
	{
		id: 1,
		title: 'The Shawshank Redemption',
		year: 1994,
		genres: {
			id: 1,
			name: 'Drama',
		},
	},
	{
		id: 2,
		title: 'The Godfather',
		year: 1972,
		genres: {
			id: 2,
			name: 'Love',
		},
	},
];

const found = filter(movies, { genres: { name: 'Drama' } });
console.log('found', found);
