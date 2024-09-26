import 'mocha';
import assert from 'assert';
import { greet, is34Old } from './index'; // Importing both greet and is34Old

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
    const is34OldResult = is34Old(34);
    const is35OldResult = is34Old(35);
    const is36OldResult = is34Old(36);

    // assert
    assert.strictEqual(is34OldResult, false); // 34 is not considered "old"
    assert.strictEqual(is35OldResult, true);  // 35 is considered "old"
    assert.strictEqual(is36OldResult, true);  // 36 is considered "old"
  });
});
