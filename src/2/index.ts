import {readFileSync} from 'fs';
import {join} from 'path';

const inputPath = join(__dirname, 'input.txt');
const inputLines = readFileSync(inputPath, 'utf-8')
	.split(',')
	.map(line => parseInt(line, 10));

inputLines[1] = 12;
inputLines[2] = 2;

/** Opcodes that will appear in the intcode. */
enum Opcodes {
	/** Opcode for adding two numbers. */
	Add = 1,
	/** Opcode for multiplying two numbers. */
	Multiply,
	/** Opcode for when the program is finished and should immediately halt. */
	Finished = 99
}

/**
 * Calculates the solution for day 2 part 1.
 * @param initialIntcodeProgram The intcode to use in the program
 * @returns The final state of the intcode program
 */
export function part1(initialIntcodeProgram: number[] = inputLines): number[] {
	const intcodeProgram = [...initialIntcodeProgram];

	for (let index = 0; index < intcodeProgram.length; ) {
		const intcode = intcodeProgram[index];

		if (intcode === Opcodes.Finished) {
			break;
		} else if (intcode === Opcodes.Add) {
			intcodeProgram[intcodeProgram[index + 3]] =
				intcodeProgram[intcodeProgram[index + 1]] + intcodeProgram[intcodeProgram[index + 2]];

			index += 4;
		} else if (intcode === Opcodes.Multiply) {
			intcodeProgram[intcodeProgram[index + 3]] =
				intcodeProgram[intcodeProgram[index + 1]] * intcodeProgram[intcodeProgram[index + 2]];

			index += 4;
		}
	}

	return intcodeProgram;
}

/** A pair of inputs for an Intcode program. */
interface InputPair {
	noun: number;
	verb: number;
}

/**
 * Gets the noun and verb for an output.
 * @param expectedOutput What the pair of inputs would generate
 * @param initialIntcodeProgram The intcode to use in the program
 */
export function inputFinder(
	expectedOutput = 19690720,
	initialIntcodeProgram: number[] = inputLines
): Promise<InputPair> {
	return new Promise((resolve, reject) => {
		for (let noun = 0; noun <= 99; noun++) {
			for (let verb = 0; verb <= 99; verb++) {
				const intcodeProgram = [...initialIntcodeProgram];
				intcodeProgram[1] = noun;
				intcodeProgram[2] = verb;

				const actualOutput = part1(intcodeProgram);

				if (actualOutput[0] === expectedOutput) {
					return resolve({noun, verb});
				}
			}
		}

		return reject(new RangeError(`Could not find input noun and verb for the output ${expectedOutput}`));
	});
}

/**
 * Calculates the answer for day 2 part 2.
 * @param inputs The inputs to use to calculate the answer
 * @returns The answer for day 2 part 2
 */
export function part2(inputs: InputPair): number {
	return 100 * inputs.noun + inputs.verb;
}
