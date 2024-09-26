import 'mocha';
import assert from 'assert';
import { greet, isOld, countOdd, sumEven, isDivisibleByThree, Address, Person } from './index';

describe('TypeScript Tests', () => {
    
    it('get greeting', () => {
        // arrange
        const birthYear = 1972;
        const name = 'Marcus';
        
        // act
        const result = greet(name, birthYear);
        
        // assert
        const expectedAge = new Date().getFullYear() - birthYear; // Calculate expected age dynamically
        assert.strictEqual(result, `Hello ${name}, you are ${expectedAge} years old`);
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

    it("sum even numbers", () => {
        // arrange
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // act
        const sum = sumEven(nums);

        // assert
        assert.strictEqual(sum, 30); // Sum of even numbers: 2 + 4 + 6 + 8 + 10 = 30
    });

    it('should create a Person object and verify its properties', () => {
        // arrange
        const person: Person = {
            name: "Marcus",
            birthYear: 1972,
            address: {
                street: "Strålgatan",
                streetNo: 23,
                city: "Stockholm",
            },
        };

        // act & assert
        assert.strictEqual(person.name, "Marcus");
        assert.strictEqual(person.birthYear, 1972);
        assert.strictEqual(person.address.street, "Strålgatan");
        assert.strictEqual(person.address.streetNo, 23);
        assert.strictEqual(person.address.city, "Stockholm");
    });
});
