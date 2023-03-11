// 1 => 1
// 2 => 4
// 3 => 9

export const memo = new Map();

function sleep(ms: number) {
	const date = Date.now();
	let currentDate = 0;

	while (currentDate - date < ms) {
		currentDate = Date.now();
	}
}

function calculateSquare(n: number) {
	sleep(3000);
	return n * n;
}

export function memoize(n: number) {
	if (memo.has(n)) {
		return memo.get(n);
	}

	const result = calculateSquare(n);

	memo.set(n, result);

	return result;
}
