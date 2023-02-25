let num: number;
let str: string;
let sym: symbol;
let nil: null;
let und: undefined;
let bool: boolean;
let big: BigInteger;

let arr: [];
let arr1: number[];
let arr2: Array<number>;

let obj: {};

// additional
let an: any;
let un: unknown;

// interface
// extends

interface Human {
	name: string;
}

// interface Person extends Human {
//   readonly id: string;
//   age: number;
// }

// type
type Person = {
	readonly id: string;
	age: number;
} & Human;

let p: Person = {
	id: 'randomId',
	name: 'john',
	age: 25,
};

// p.age = '543';
p.age = 24;
// p.id = '34';

// type

interface A {
	name: string;
}
interface A {
	surname: string;
}
// extension
let aaa: A = {
	name: '',
	surname: '',
};

//
type B = {
	name: string;
};
// type B = {}

type CalculateAge = (year: number, name?: string) => number;

//
const calculateAge: CalculateAge = (year, name = 'John') => {
	console.log('Hello, ' + name + '!');
	return new Date().getFullYear() - year;
};

// calculateAge.length == 1
calculateAge(1999);

function getGel(distance: number): boolean {
  if (distance > 100) {
    return true;
  }
  return false;
}
