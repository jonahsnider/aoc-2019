import test from 'ava';
import {part1, part2} from '../../src/1/performance';

// Confirmed to be correct from the answer page
test('part 1 solution', t => {
	return t.is(part1(), 3269199);
});

// Confirmed to be correct from the answer page
test('part 2 solution', t => {
	return t.is(part2(), 4900909);
});
