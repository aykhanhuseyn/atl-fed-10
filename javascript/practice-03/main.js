// params ww1: string, w2: string
// return boolean
// function isAnagram(w1, w2) {
// 	if (w1.length !== w2.length) return false;

// 	// 'qara' => ['q', 'a', 'r', 'a'] => sort => ['a', 'a', 'q', 'r'] => join => 'aaqr'
// 	// 'araq' => ['a', 'r', 'a', 'q'] => sort => ['a', 'a', 'q', 'r'] => join => 'aaqr'

// 	return w1.split('').sort().join('') === w2.split('').sort().join('');
// }

function isAnagram(w1, w2) {
	if (w1.length !== w2.length) return false;

	const obj = {};

	for (let char of w1) {
		if (obj[char]) {
			obj[char] = obj[char] + 1;
		} else {
			obj[char] = 1;
		}
	}

	for (let char of w2) {
		if (obj[char]) {
			obj[char] = obj[char] - 1;
		} else {
			return false;
		}
	}

	return true;
}

function functionDeclaration() {}

const functionExpesion = function () {};

// (function immediatelyInvokigFunctionDeclaration () {
//   //
// })()

// immediatelyInvokigFunctionExpression
// (function () {
//   //
// })()

// const arrow = () => {
//   //
// }

// ARROW                    VS                    CLASSIC
// ONELINE RETURN
// ex: const arrow = () => 5;
// const fn = function () {
//    return 5;
// }
// ARGUMENTS
//                                                Arguments
// HOINTING
// Not Hoisted                                    Hoisted
// NEW KEYWORD
// not constructor                                Constructor

const array = [1, 2, 5, 55, 2, 4];
//             [1, 2, 5, 55, 2, 4];
//             [1, 2, 5, 2, 55, 4];
//             [1, 2, 5, 2, 4, 55];
//             [1, 2, 2, 5, 4, 55];
//             [1, 2, 2, 4, 5, 55];
//             [1, 2, 2, 4, 5, 55];

console.log(array.sort());
console.log(array.sort((a, b) => a - b));
console.log(array.sort((a, b) => b - a));
