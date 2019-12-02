import test from 'ava';
import {part1, part2, inputFinder} from '../../src/2';

test('part 1 solution', t => {
	t.deepEqual(part1([1, 0, 0, 0, 99]), [2, 0, 0, 0, 99], 'addition');
	t.deepEqual(part1([2, 3, 0, 3, 99]), [2, 3, 0, 6, 99], 'multiplication');
	t.deepEqual(part1([2, 4, 4, 5, 99, 0]), [2, 4, 4, 5, 99, 9801]);
	t.deepEqual(part1([1, 1, 1, 4, 99, 5, 6, 0, 99]), [30, 1, 1, 4, 2, 5, 6, 0, 99]);
});

test('input finder', async t => {
	// Sometimes the error checking test hangs forever, so we set this limit to stop it
	t.timeout(500);
	// Required because of the promise based tests that are async
	t.plan(3);

	const inputFinderOutputs = {
		broken: inputFinder(-1),
		working: inputFinder(19690720)
	};

	// Confirmed to be correct from the answer page
	inputFinderOutputs.working.then(inputs => t.deepEqual(inputs, {noun: 51, verb: 21}));

	const error = await t.throwsAsync(inputFinderOutputs.broken);
	t.is(error.message, 'Could not find input noun and verb for the output -1');
});

test('part 2 solution', t => {
	// This is confirmed correct because it's provided as an example from AoC
	return t.is(part2({noun: 12, verb: 2}), 1202);
});
