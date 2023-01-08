// class Person {
// 	#name;
// 	#surname;
// 	constructor(firstName = '', secondName = '') {
// 		this.#name = firstName;
// 		this.#surname = secondName;
// 	}
// 	// () => string;
// 	get name() {
// 		return this.#name;
// 	}
// 	// (value: string) => void;
// 	set name(newName) {
// 		if (newName !== null) {
// 			this.#name = newName;
// 		}
// 	}
// }
// getter
// setter

// class Employee extends Person {
// 	ssn;
// 	constructor(sosial) {
// 		super('Polat', 'Alemdar');
// 		this.ssn = sosial;
// 	}
// 	// constructor(){
// 	//   super();
// 	// }
// }

// LivingThing
// Human
// Animal
// Citizen
// Employee

class Generator {
	static pinGenerator() {
		return Math.floor(Math.random() * 1_000_000_000_000)
			.toString(36)
			.toUpperCase()
			.slice(0, 7)
			.padStart(7, '0');
	}
	static ssnGenerator() {
		return Math.floor(Math.random() * 1_000_000_000_000)
			.toString(10)
			.slice(0, 10)
			.padStart(10, '0');
	}
}

class LivingThing {
	#birthDate;
	#deathDate;
	// static ClassIsCreated;
	constructor(birthDate = new Date(), deathDate = null) {
		this.#birthDate = birthDate;
		this.#deathDate = deathDate;
	}
	// calculateable
	get isLiving() {
		return !this.#deathDate;
	}
	get birthDate() {
		return this.#birthDate;
	}
	get deathDate() {
		return this.#deathDate;
	}
	// method
	kill() {
		if (this.isLiving === false) {
			throw new Error('I am dead inside. You can not kill me!');
		}
		if (this.isLiving === true) {
			this.#deathDate = new Date();
		}
	}
}
// const living = new LivingThing();

class Human extends LivingThing {
	constructor(name = 'John', surname = 'Doe') {
		super();
		this.name = name;
		this.surname = surname;
	}
}
class Citizen extends Human {
	#pin;
	constructor(name, surname, address = null) {
		super(name, surname);
		this.#pin = Generator.pinGenerator();
		this.address = address;
		this.rights = true;
	}
	get pin() {
		return this.#pin;
	}
}
class Employee extends Citizen {
	role;
	#ssn;
	constructor(name, surname, address, role) {
		super(name, surname, address);
		this.#ssn = Generator.ssnGenerator();
		this.role = role;
	}
	getSSN(requester) {
		if (requester?.role === 'HR') {
			return this.#ssn;
		}
		return null;
	}
}
class Animal extends LivingThing {
	#type;
	constructor(type, name = null) {
		super();
		if (!type) {
			throw new Error('Animal has to have type');
		}
		this.name = name;
		this.#type = type;
	}
}
class Dog extends Animal {
	constructor(name) {
		super('dog', name);
	}
	canBark = true;
	bark() {
		console.log('hav hav');
	}
}

LivingThing.IsMuslim;

// private => #
// public =>
// static => static

// error handling
// try, catch, finally

let animal;
try {
	animal = new Animal('bird');
	animal.kill();
	animal.kill();
} catch (e) {
	console.warn(e.message);
} finally {
	console.log('salam');
}
