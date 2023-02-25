class Person {
	#name;
	getName() {
		new Error('you have to implement this method');
	}
	constructor() {
		super();
		this.#name = '';
	}
}

class Employee extends Person {
	name = '';
	constructor() {
		super();
		this.age = 25;
	}
}

const em = new Employee();

em.getName();
