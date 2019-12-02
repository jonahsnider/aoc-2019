import {part1, part2, inputFinder} from '.';

console.log(`Part 1 solution: ${part1()[0]}`);

const inputs = inputFinder();
if (inputs) {
	console.log(`Part 2 solution: ${part2(inputs)}`);
} else {
	throw new RangeError('Unable to find input pair');
}
