"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert_1 = __importDefault(require("assert"));
const index_1 = require("./index");
describe('ts tests', () => {
    it('get greeting', () => {
        // arrange
        const birthYear = 1972;
        const name = 'Marcus';
        const currentYear = new Date().getFullYear(); // Get the current year
        const expectedAge = currentYear - birthYear; // Calculate expected age dynamically
        // act
        const result = (0, index_1.greet)(name, birthYear);
        // assert
        assert_1.default.strictEqual(result, `Hello ${name}, you are ${expectedAge} years old`); // Use dynamic expected value
    });
    it('returns true if age is above or equal to 35', () => {
        // act
        const is34OldResult = (0, index_1.isOld)(34);
        const is35OldResult = (0, index_1.isOld)(35);
        const is36OldResult = (0, index_1.isOld)(36);
        // assert
        assert_1.default.strictEqual(is34OldResult, false); // 34 is not considered "old"
        assert_1.default.strictEqual(is35OldResult, true); // 35 is considered "old"
        assert_1.default.strictEqual(is36OldResult, true); // 36 is considered "old"
    });
    it("fun with variables", () => {
        // act
        let name = "Marcus";
        let nameImplicit = "Marcus";
        let nameImplicit2 = name;
        const cool = true;
        const birthYear = 1972;
        // arrange
        assert_1.default.strictEqual(typeof cool, "boolean");
        assert_1.default.strictEqual(typeof birthYear, "number");
        assert_1.default.strictEqual(typeof name, "string");
        assert_1.default.strictEqual(typeof nameImplicit, "string");
        assert_1.default.strictEqual(typeof nameImplicit2, "string");
    });
    it("arrays are typed in ts", () => {
        const names = ["Marcus", "Julia", "Catherine"];
        const firstFive = [1, 2, 3, 4, 5];
    });
    it("counts odd numbers in an array", () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const count = (0, index_1.countOdd)(nums);
        assert_1.default.strictEqual(count, 5); // There are 5 odd numbers: 1, 3, 5, 7, 9
    });
    it("sums even numbers in an array", () => {
        // arrange
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // act
        const sum = (0, index_1.sumEven)(nums);
        // assert
        assert_1.default.strictEqual(sum, 30); // The sum of even numbers (2 + 4 + 6 + 8 + 10) is 30
    });
    it("checks if a number is divisible by 3", () => {
        assert_1.default.strictEqual((0, index_1.isDivisibleByThree)(9), true); // 9 is divisible by 3
        assert_1.default.strictEqual((0, index_1.isDivisibleByThree)(10), false); // 10 is not divisible by 3
    });
    it("gets the street number for a person", () => {
        // arrange
        const p = {
            name: "Marcus",
            birthYear: 1972,
            address: {
                street: "Strålgatan",
                streetNo: 23,
                city: "Stockholm",
            },
        };
        // act
        const streetNo = (0, index_1.getPersonStreetNo)(p);
        // assert
        assert_1.default.strictEqual(streetNo, 23); // Check that the street number is correct
    });
});
//# sourceMappingURL=index.test.js.map