// let, const => Reference Error => Block Scope

// var => undefined => Function Scope

// function => function body

sayHi('Ramiz', 1, 2, 3, 'quba', 'kuba');

console.log(sayHi);

// Classic function
// Function Expression
function sayHi(name) {
	console.log(arguments);
	// console.log('Salam, ' + name);
	console.log('Salam, ' + arguments[4]);
}

// console.log(ala);

// console.log('Salam, Ayxan');
// console.log('Salam, Orxan');
// console.log('Salam, Serxan');

sayHi('Ramiz', 1, 2, 3, 'DORD', 5, 6, 7);

//

// console.log(surName);
// var surName = 'Johnson';
// console.log(surName);

sayHi('Obama');
sayHi('Orxan');

// console.log(sayBye);

// Arrow function
const sayBye = (name) => {
	// console.log(arguments);
	console.log('Sag ol, ' + name);
};

sayBye('Elmir');

// console.log(sayHello);

// Function Declaration
const sayHello = function (name) {
	console.log('Hello, ' + name);
};

sayHello('Declaration');

sayHi('Expression');

sayBye('Arrow function');
