import test from 'ava';
import {part1, part2} from '../../src/1/performance';

test('part 1 solution', t => {
	// Confirmed to be correct from the answer page
	return t.is(part1(), 3269199);
});

test('part 2 solution', t => {
	// Confirmed to be correct from the answer page
	return t.is(part2(), 4900909);
});
