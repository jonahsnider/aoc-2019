import {part1, part2, inputFinder} from '.';

console.log(`Part 1 solution: ${part1()[0]}`);

const inputQuery = inputFinder();
inputQuery.then(inputs => console.log(`Part 2 solution: ${part2(inputs)}`)).catch(console.error);
