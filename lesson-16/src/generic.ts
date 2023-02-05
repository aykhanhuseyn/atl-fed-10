// tuple
let tuple: [string, number] = ['red', 234];

tuple[0] = '234';
tuple[1] = 934853;

//
function getRandomNumber(array: number[]): number {
	const randomIndex = Math.floor(Math.random() * array.length);

	return array[randomIndex];
}

console.log(getRandomNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function getRandomString(array: string[]): string {
	const randomIndex = Math.floor(Math.random() * array.length);

	return array[randomIndex];
}

console.log(
	getRandomString(['john', 'jack', 'elton', 'elvis', 'mercury', 'fredy']),
);

type Personcuk = {
	name: string;
};

function getRandomPerson(array: Personcuk[]): Personcuk {
	const randomIndex = Math.floor(Math.random() * array.length);

	return array[randomIndex];
}

console.log(
	getRandomPerson([
		{ name: 'john' },
		{ name: 'jack' },
		{ name: 'elton' },
		{ name: 'elvis' },
		{ name: 'mercury' },
	]),
);

function getRandomElement<T = any>(array: T[]): T {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

console.log(getRandomElement([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(
	getRandomElement(['john', 'jack', 'elton', 'elvis', 'mercury', 'fredy']),
);

console.log(
	getRandomElement([
		{ name: 'john' },
		{ name: 'jack' },
		{ name: 'elton' },
		{ name: 'elvis' },
		{ name: 'mercury' },
	]),
);

let r = getRandomElement(['1', '2', '3']);

interface Precious {
	price: number;
}

interface Organ extends Precious {
	name: 'boyrek' | 'urek';
	price: 1;
}
//
interface Order<T extends Precious> {
	id: string;
	product: T[];
}

const o: Order<Organ> = {
	id: '',
	product: [
		{
			name: 'boyrek',
      price: 1,
		},
	],
};

interface P {
  name: string;
}

// const o1: Order<P> = {
// }

type x = Exclude<string|number|boolean, number>;

type y = Extract<string|number|boolean, number>;

// interface extends, implements

interface Runnable {
	run(): void;
}
interface Flyable {
	fly(): void;
}

class Bird implements Runnable, Flyable {
	run() {
		console.log('run');
	}
	fly() {
		console.log('fly');
	}
}
