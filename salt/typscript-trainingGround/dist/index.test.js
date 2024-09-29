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
        const birthYear = 1972;
        const name = 'Marcus';
        const currentYear = new Date().getFullYear();
        const expectedAge = currentYear - birthYear;
        const result = (0, index_1.greet)(name, birthYear);
        assert_1.default.strictEqual(result, `Hello ${name}, you are ${expectedAge} years old`);
    });
    it('returns true if age is above or equal to 35', () => {
        assert_1.default.strictEqual((0, index_1.isOld)(34), false);
        assert_1.default.strictEqual((0, index_1.isOld)(35), true);
        assert_1.default.strictEqual((0, index_1.isOld)(36), true);
    });
    // ADD NEW TESTS HERE
    it("prints an IPerson", () => {
        // arrange
        const p1 = { name: "Marcus", birthYear: 1972 };
        const p2 = { name: "David", birthYear: 1975, drummer: true };
        // act
        const p1Address = getPersonNameString(p1);
        const p2Address = getPersonNameString(p2);
        // assert
        assert_1.default.strictEqual(p1Address, "Marcus, 1972");
        assert_1.default.strictEqual(p2Address, "David, 1975");
    });
    it('get greeting from PersonClass', () => {
        const birthYear = 1972;
        const name = 'Marcus';
        const currentYear = new Date().getFullYear();
        const expectedAge = currentYear - birthYear;
        const p = new index_1.PersonClass(name, birthYear);
        const result = p.greet();
        assert_1.default.strictEqual(result, `Hello Marcus, you are ${expectedAge} years old`);
    });
    it("using EmployeeClass", () => {
        const p = new index_1.PersonClass("Marcus", 1972);
        const e = new index_1.EmployeeClass("Marcus Employee", 1972);
        e.employeeId = 12345;
        assert_1.default.strictEqual(p.getName(), "Marcus");
        assert_1.default.strictEqual(e.getName(), "Marcus Employee");
        assert_1.default.strictEqual(e.employeeId, 12345);
    });
});
//# sourceMappingURL=index.test.js.map