// OPERATORS
// aritmetic operators
// + - * / **
// console.log(2 + 3);
// console.log(2 - 3);
// console.log(2 * 3);
// console.log(2 / 3);
// console.log(2 ** 3);

// comparition operators
// console.log(2 > 3); // does type coersion, greater than
// console.log(2 >= 3); // does type coersion, greater than or equal to
// console.log(2 < 3); // does type coersion
// console.log(2 <= 3); // does type coersion

// console.log(2 == 3); // does type coersion
// console.log(2 === 3); // checks types first
// console.log(2 != 3); // does type coersion
// console.log(2 !== 3); // checks types first

// logical operators
// LOGICAL AND => &&
// LOGICAL OR => ||

// ternary
let age = 19;

if (age > 16) {
	if (age > 65) {
		console.log('sen qocasan, isleye bilmezsen');
	} else {
		console.log('isinde ugurlar');
	}
} else {
	console.log('sen isleye bilmezsen');
}

// age > 16
// 	? age < 65
// 		? console.log('isinde ugurlar')
// 		: console.log('senn qocasan, isleye bilmezsen')
// 	: console.log('sen isleye bilmezsen');
// bitwise operators
