// reverse a string

function reverseString(str) {
	let result = '';
	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	return result;
}

reverseString('salam'); // malas
// reverseString('adam'); // mada
// reverseString('qurban olum'); // mulo nabruq

// create
//

// reverse a number

// NUMBER: 2021

function reverseNumber(num) {
	let reminder = 0,
		result = 0;
	// debugger;
	while (num != 0) {
		reminder = num % 10;
		result = result * 10 + reminder;
		num = Math.floor(num / 10);
	}

	return result;
}

// reverseNumber(123); // 321
// reverseNumber(55); // 55
// reverseNumber(2020); // 202
