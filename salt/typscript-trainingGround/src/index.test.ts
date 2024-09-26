import 'mocha';
import assert from 'assert';
import { 
  greet, 
  isOld, 
  countOdd, 
  sumEven, 
  isDivisibleByThree, 
  getPersonStreetNo, 
  Address, 
  Person 
} from './index';

describe('ts tests', () => {
  it('get greeting', () => {
    // arrange
    const birthYear = 1972; // Changed to number
    const name = 'Marcus';

    // act
    const result = greet(name, birthYear);

    // assert
    assert.strictEqual(result, 'Hello Marcus, you are 51 years old');
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

  it("fun with variables", () => {
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

  it("arrays are typed in ts", () => {
    const names: string[] = ["Marcus", "Julia", "Catherine"];
    const firstFive: number[] = [1, 2, 3, 4, 5];
  });

  it("counts odd numbers in an array", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const count = countOdd(nums);

    assert.strictEqual(count, 5); // There are 5 odd numbers: 1, 3, 5, 7, 9
  });

  it("sums even numbers in an array", () => {
    // arrange
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // act
    const sum = sumEven(nums);

    // assert
    assert.strictEqual(sum, 30); // The sum of even numbers (2 + 4 + 6 + 8 + 10) is 30
  });

  it("checks if a number is divisible by 3", () => {
    assert.strictEqual(isDivisibleByThree(9), true); // 9 is divisible by 3
    assert.strictEqual(isDivisibleByThree(10), false); // 10 is not divisible by 3
  });

  it("gets the street number for a person", () => {
    // arrange
    const p: Person = {
      name: "Marcus",
      birthYear: 1972,
      address: {
        street: "Strålgatan",
        streetNo: 23,
        city: "Stockholm",
      },
    };

    // act
    const streetNo = getPersonStreetNo(p);

    // assert
    assert.strictEqual(streetNo, 23); // Check that the street number is correct
  });
});
