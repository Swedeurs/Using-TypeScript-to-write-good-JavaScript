import 'mocha';
import assert from 'assert';
import { greet, isOld, countOdd, isDivisibleByThree } from './index';

describe('TypeScript Tests', () => {
  it('get greeting', () => {
    // arrange
    const birthYear = 1972;
    const name = 'Marcus';
    const currentYear = new Date().getFullYear(); // Get the current year dynamically
    const expectedAge = currentYear - birthYear; // Calculate expected age dynamically

    // act
    const result = greet(name, birthYear);

    // assert
    assert.strictEqual(result, `Hello ${name}, you are ${expectedAge} years old`); // Use dynamic expected age
  });

  it('returns true if age is above or equal to 35', () => {
    // act
    const is34OldResult = isOld(34);
    const is35OldResult = isOld(35);
    const is36OldResult = isOld(36);

    // assert
    assert.strictEqual(is34OldResult, false); // 34 is not considered "old"
    assert.strictEqual(is35OldResult, true);  // 35 is considered "old"
    assert.strictEqual(is36OldResult, true);  // 36 is considered "old"
  });

  it('fun with variables', () => {
    // act
    let name: string = "Marcus";
    let nameImplicit = "Marcus";
    let nameImplicit2 = name;

    const cool: boolean = true;
    const birthYear = 1972;

    // arrange
    assert.strictEqual(typeof cool, "boolean");
    assert.strictEqual(typeof birthYear, "number");
    assert.strictEqual(typeof name, "string");
    assert.strictEqual(typeof nameImplicit, "string");
    assert.strictEqual(typeof nameImplicit2, "string");
  });

  it('arrays are typed in ts', () => {
    const names: string[] = ["Marcus", "Julia", "Catherine"];
    const firstFive: number[] = [1, 2, 3, 4, 5];

    // assert
    assert.strictEqual(names.length, 3); // Check that there are three names
    assert.strictEqual(firstFive.length, 5); // Check that there are five numbers
  });

  it('counts the odd numbers in an array', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = countOdd(numbers);
    assert.strictEqual(result, 5); // There are 5 odd numbers: 1, 3, 5, 7, 9
  });

  it('returns 0 for an empty array', () => {
    const numbers: number[] = [];
    const result = countOdd(numbers);
    assert.strictEqual(result, 0); // No odd numbers in an empty array
  });

  it('counts odd numbers correctly with negative values', () => {
    const numbers = [-3, -2, -1, 0, 1, 2, 3];
    const result = countOdd(numbers);
    assert.strictEqual(result, 4); // Odd numbers: -3, -1, 1, 3
  });

  // New test for isDivisibleByThree function
  it('checks if a number is divisible by 3', () => {
    assert.strictEqual(isDivisibleByThree(3), true);  // 3 is divisible by 3
    assert.strictEqual(isDivisibleByThree(4), false); // 4 is not divisible by 3
    assert.strictEqual(isDivisibleByThree(0), true);  // 0 is divisible by 3
    assert.strictEqual(isDivisibleByThree(-3), true); // -3 is divisible by 3
  });
});
