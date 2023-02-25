// let ip = '192.168.1.1'; // 192[.]168[.]1[.]1
// let ip = '192.168.122.122'; // 192[.]168[.]1[.]1

// loop over string
// check character if it is dot
// then put this '[.]'

// let result = '';

// // // 0
// // // 1
// // // 2
// // // 3
// for (let i = 0; i < ip.length; i++) {
// 	// debugger;
// 	if (ip[i] == '.') {
// 		// result += '[.]';
// 	} else {
// 		result += ip[i];
// 	}
// }

// console.log(result);

// SALAM

let res = 'result is: ';
let word = 'salam qaqa nətərsən, evdə eşikdə nə var nə yox';

for (let i = 0; i < word.length; i++) {
	switch (word[i]) {
		case 'a':
		case 'ı':
		case 'o':
		case 'u':
		case 'e':
		case 'ə':
		case 'i':
		case 'ö':
		case 'ü':
		case ' ':
		case ',':
			break;

		default:
			res += word[i];
			break;
	}
}

console.log(res);

// SLM
