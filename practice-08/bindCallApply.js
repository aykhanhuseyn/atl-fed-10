// 1. gallery app json placeholder

// 2. Array.prototype.salam
// 3. Function.call|apply|bind

const array = [1, 2, 3, 4, 5];

// array.last(); // 5

// instance.__proto__ === Parent.prototype
// array.__proto__ === Array.prototype

// instance method
Array.prototype.last = function () {
	console.log(this);
	return this.at(-1);
};
Array.prototype.second = function () {
	return this[1];
};

// static method
Array.greet = function () {
	return 'hello';
};
Array.greet();

array.last(); // 5

class MyArray {
	static greet() {}
	last() {}
}

const m = new MyArray();
// instance
m.last();
// static
MyArray.greet();

// BIND CALL APPLY
const iAmThis = {
	name: 'John',
	whoAmI(surname, age, nationality) {
		console.log(this, surname, age, nationality);
		return this.name;
	},
};
function whoIsThis() {
	console.log(this);
}

// add forEach to HTMLCollection
const htmlColl = document.getElementsByTagName('figure');
HTMLCollection.prototype.forEach = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this);
	}
};
htmlColl.forEach((element) => {
	console.log(element);
});

HTMLCollection.prototype.map = function (callback) {
	const array = [];
	for (let i = 0; i < this.length; i++) {
		array.push(callback(this[i], i, this));
	}
	return array;
};
