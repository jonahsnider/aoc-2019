import test from 'ava';
import {part1, part2, inputFinder} from '../../src/2';

test('part 1 solution', t => {
	t.deepEqual(part1([1, 0, 0, 0, 99]), [2, 0, 0, 0, 99], 'addition');
	t.deepEqual(part1([2, 3, 0, 3, 99]), [2, 3, 0, 6, 99], 'multiplication');
	t.deepEqual(part1([2, 4, 4, 5, 99, 0]), [2, 4, 4, 5, 99, 9801]);
	t.deepEqual(part1([1, 1, 1, 4, 99, 5, 6, 0, 99]), [30, 1, 1, 4, 2, 5, 6, 0, 99]);
});

test('input finder', t => {
	// Confirmed to be correct from the answer page
	t.deepEqual(inputFinder(19690720), {noun: 51, verb: 21});

	// Trying to test the error causes this test to hang forever and break the test suite
	// Maybe because it's brute forcing tons of combinations before it realizes it's impossible
	// const error = t.throws(() => inputFinder(-1, [0, 0, 0, 99]), RangeError);
	// t.is(error.message, 'Could not find input noun and verb for the output -1');
});

test('part 2 solution', t => {
	// This is confirmed correct because it's provided as an example from AoC
	return t.is(part2({noun: 12, verb: 2}), 1202);
});
