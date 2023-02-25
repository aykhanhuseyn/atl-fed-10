let variable: string;
variable = 'string value';

// declare function stringReturner(): string;
// .d.ts file
function stringReturner(): string | null {
	if (Math.random() > 0.5) {
		return variable;
	}
	return null;
}

stringReturner();

// number array

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// tuple
const tuple: [string, number] = ['string', 1];

type Color = 'red' | 'green' | 'blue';

type ColorTuple = [Color, number, number?];

const red: ColorTuple = ['red', 0xff0000];
const blue: ColorTuple = ['blue', 0x00ff00];
const green: ColorTuple = ['green', 0x0000ff, 0.5];
const purple: ColorTuple = ['blue', 0xff00ff, 0.5];

// uion type
type Names = 'John' | 'Jane' | 'Jack';
type Points = 1 | 2 | 3 | 4 | 5;
type ExamResults = [Names, Points];

const results: ExamResults[] = [
	['John', 5],
	['Jane', 4],
	['Jack', 3],
	// ['Qurbaneli bey', 100],
];
results.push(['Jane', 1]);

type Address = {
	city: string;
	street: string;
	number: number;
};
type Person = Partial<{
	name: string;
	age: number;
	isMarried: boolean;
	address: Address;
}>;
const object: Person = {
	name: 'John',
	age: 25,
	// isMarried: false,
	// address: {
	// 	city: 'New York',
	// 	street: 'Wall Street',
	// 	number: 1,
	// },
	// isStudent: true,
};

type Animal = {
	name?: 'Dog' | 'Cat' | 'Bird' | 'Fish' | 'Horse' | 'Cow' | 'Pig';
	age?: number;
};
const animal: Required<Animal> = {
	name: 'Dog',
	age: 5,
};

function printAnimalName(animal: Animal): Animal['name'] {
	return animal.name;
}

const animalName = printAnimalName({ name: 'Dog' });
const animalNameZOR = printAnimalName({ name: 'Dog' })!;
const animalNameAS = printAnimalName({
	name: 'Dog',
}) as Required<Animal>['name'];

//
// interface IAnimal {}
// int i32number = 5;
// float f32number = 5.5;
// double f64number = 5.5;
// float PI = 3.14;

// var PI = 3.14;
const pi = 3.14;

interface Runnable {
	run(): void;
}
interface Swimmable {
	swim(): void;
}
class Human {}
class Personcuk extends Human implements Runnable, Swimmable {
	run() {}
	swim() {}
}

function letsGoToTheSea(uzeBilenLyuboyQaqasnanGedirem: Swimmable) {}

const person = new Personcuk();

letsGoToTheSea(person);
// letsGoToTheSea({}); // gede bilmedik

// person.__proto__ === Person.prototype;
// // person.__proto__ === Employee.prototype;

function noRet(): Personcuk {
	return person;
}
type Nese = ReturnType<typeof noRet>;

type Employee = {
	ssn: string;
	id?: number;
	pin: number;
};
type Developer = {
	ssn: string;
	languages: string[];
};
type Designer = {
	ssn: string;
	tools: string[];
};
type DBAdmin = {
	ssn: string;
	db?: string[];
	pin: number;
};
const civi: Developer = {
	ssn: '123',
	languages: ['js', 'ts'],
};
const qara: Designer = {
	ssn: '123',
	tools: ['figma', 'photoshop'],
};
let employee: Employee;
employee = civi as unknown as Employee;
// employee = qara as Employee;
// casting
// downcasting

const db: DBAdmin = {
	ssn: '123',
	pin: 123,
};
employee = db as Employee;

// generic interface
interface Dev<L extends any[] = ('js' | 'ts')[]> {
	name: string;
	languages: L;
}

const dev: Dev = {
	name: 'John',
	languages: ['js', 'ts'],
};
const dev2: Dev<('js' | 'ts' | 'c#')[]> = {
	name: 'John',
	languages: ['js', 'ts', 'c#'],
};

// never
function getName(message: string): string | never {
	if (Math.random() > 0.5) {
		return message;
	}
	throw new Error(message);
}

try {
	const abc = getName('Hello');
	console.log(abc);
} catch (error) {
	console.error('error');
}

// enum
enum Month {
	January = 1,
	February,
	March,
	April,
	May,
	June,
	July,
	August,
	September,
	October,
	November,
	December,
}
Month.January;

const enum Role {
	Admin = 23432,
	Moderator = 45454,
	SuperAdmin = 45454345,
}
Role.Admin;
Role.Moderator;
const roles = {
	Admin: 'admin',
	Moderator: 'moderator',
};

// take from object
type PersonCukCuk = Pick<Person, 'name' | 'address'>;
// remove from object
type PersonCukCukCuk = Omit<Person, 'name' | 'address'>;

// minion union
type Minion = 'Bob' | 'Kevin' | 'Stuart';
// take from union
type BK = Extract<Minion, 'Bob' | 'Kevin'>;
// remove from union
type S = Exclude<Minion, 'Bob' | 'Kevin'>;

function calculateTax(amount: number, vat: number) {
	return (amount * vat) / 100;
}

type Tax = ReturnType<typeof calculateTax>;

type amount = Parameters<typeof calculateTax>[0];
export type vat = Parameters<typeof calculateTax>[1];
