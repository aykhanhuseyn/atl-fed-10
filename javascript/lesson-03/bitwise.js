let age = 11;
let year;

if (age && year) {
	console.log('salam');
}

if (age || year) {
	console.log('salam bro');
}

if (age && !year) {
	console.log('salam bro, necesen');
}

/*

1 => 0000 0001
2 => 0000 0010
3 => 0000 0011
4 => 0000 0100

*/

// & => AND
// | => OR
// ~ => NOT
// ^ => XOR

// Bitwise AND (takes two params)
// 0000 0101 => 5
// 0000 0110 => 6
// &
// 0000 0100 => 4

// Bitwise OR (takes two params)
// 0000 0101 => 5
// 0000 0110 => 6
// |
// 0000 0111 => 7

// Bitwise NOT (takes one params)
// ~
// ~0000 0101 => 5 => 0101 => ~1010

// Bitwise XOR (takes two params)
// 0000 0101 => 5
// 0000 0110 => 6
// ^
// 0000 0011 => 3

// 111
// 110
// 001

// Read     100
// Write    010
// Execute  001
// aykhan => 100

// const read = 0b100;
// const write = 0b010;
// const execute = 0b001;

// const adminAccess = read | write | execute;

// const ayxan = read;

// Bitwise SHIFT (takes two params)
// 0000 0101 << 1 => 0000 1010
// 5 => 10
// 0000 0101 >> 1 => 0000 0010
// 5 => 2
