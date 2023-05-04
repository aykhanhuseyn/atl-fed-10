import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('adds 0.1 + 0.2 to equal 0.3', () => {
	expect(sum(0.1, 0.2)).toBe(0.3);
});

// 0.1 * 100 => 10
// 0.2 * 100 => 20
// 10 + 20 => 30
// 30 / 100 => 0.3
// 0.1 + 0.2 => 0.3
