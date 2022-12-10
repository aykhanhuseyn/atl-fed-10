function isPalindrome(word) {
	let result = true;

	for (let i = 0; i < word.length / 2; i++) {
		const letter1 = word[i];
		const letter2 = word[word.length - 1 - i];
		if (letter1 != letter2) {
			result = false;
			break;
		}
	}
	console.log(result);
}

function ispal(w) {
	const lastIndex = w.length - 1;
	for (let i = 0; i < w.length / 2; i++) {
		if (w[i] != w[lastIndex - i]) {
			return false;
		}
	}
	return true;
}

// isPalindrome('anna'); // true
// isPalindrome('racecar'); // true
// isPalindrome('babat'); // false
// isPalindrome('madam'); // true

// isPalindrome('salam1malas');

/**
 * `"4,3,5,2,6,8,1"` rəqəmindən ibarət sətrimiz var. // let str = "4,3,5,2,6,8,1";
 * İstifadəçidən hər hansı bir rəqəm yazmasını tələb edərək // prompt();
 * həmin rəqəmin sətirdə olub olmaması yoxlayın. find => for
 * Əgər rəqəm ədəd varsa // console.log
 * => `“xx rəqəmi massivdə var”` və ya
 * => `“xx rəqəmi massivdə yoxdur”` şəklində ekrana yazı çıxarın.
 */

const wordBase = 'abcdef';
// char => character
// str => string
function findCharInStr(char) {
	for (let i = 0; i < wordBase.length; i++) {
		if (wordBase[i] === char) {
			return `“${char} xarakteri massivdə var”`;
		}
	}

	return `“${char} xarakteri massivdə yoxdur”`;
}

// alert(findCharInStr(prompt('enter a char')));

// const userInput = prompt('enter a char');

// const result = findCharInStr(userInput);

// alert(result);

// const input = document.getElementById('input');

// input.addEventListener('blur', () => {
// 	const result = findCharInStr(input.value);

// 	document.getElementById('result').innerText = result;
// });
