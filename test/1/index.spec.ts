import test from 'ava';
import {calculateFuelRequirement, part1, calculateFuelRequirementRecursive, part2} from '../../src/1';

test('fuel calculation', t => {
	// These values are confirmed to be correct for part 1 because they are provided by AoC https://adventofcode.com/2019/day/1
	t.is(calculateFuelRequirement(12), 2);
	t.is(calculateFuelRequirement(14), 2);
	t.is(calculateFuelRequirement(1969), 654);
	t.is(calculateFuelRequirement(100756), 33583);
});

test('total fuel calculation', t => {
	// These values are confirmed to be correct for part 2 because they are provided by AoC https://adventofcode.com/2019/day/1
	t.is(calculateFuelRequirementRecursive(14), 2);
	t.is(calculateFuelRequirementRecursive(1969), 966);
	t.is(calculateFuelRequirementRecursive(100756), 50346);
});

test('part 1 solution', t => {
	// Confirmed to be correct from the answer page
	return t.is(part1(), 3269199);
});

test('part 2 solution', t => {
	// Confirmed to be correct from the answer page
	return t.is(part2(), 4900909);
});
