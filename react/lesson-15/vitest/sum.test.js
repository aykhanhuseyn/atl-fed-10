import { expect, test } from 'vitest';
import sum from './sum.js';

test('sum adds two numbers', () => {
	expect(sum(1, 2)).toBe(3);
});
