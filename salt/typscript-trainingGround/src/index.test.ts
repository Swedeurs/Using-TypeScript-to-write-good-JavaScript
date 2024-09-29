import 'mocha';
import assert from 'assert';
import { 
  greet, 
  isOld, 
  countOdd, 
  sumEven, 
  isDivisibleByThree, 
  getPersonStreetNo, 
  getPersonNameString, 
  PersonClass, 
  EmployeeClass, 
  IPerson,   // Import IPerson
  Person     // Import Person
} from './index';

describe('ts tests', () => {

  it('get greeting', () => {
    const birthYear = 1972; 
    const name = 'Marcus';
    const currentYear = new Date().getFullYear(); 
    const expectedAge = currentYear - birthYear;

    const result = greet(name, birthYear);
    assert.strictEqual(result, `Hello ${name}, you are ${expectedAge} years old`);
  });

  it('returns true if age is above or equal to 35', () => {
    assert.strictEqual(isOld(34), false);
    assert.strictEqual(isOld(35), true);
    assert.strictEqual(isOld(36), true);
  });

  // Test for countOdd
  it('counts odd numbers in array', () => {
    assert.strictEqual(countOdd([1, 2, 3, 4, 5]), 3); // 1, 3, 5 are odd
    assert.strictEqual(countOdd([2, 4, 6]), 0);       // No odd numbers
    assert.strictEqual(countOdd([]), 0);              // Empty array
  });

  // Test for sumEven
  it('sums even numbers in array', () => {
    assert.strictEqual(sumEven([1, 2, 3, 4, 5]), 6);  // 2 + 4 = 6
    assert.strictEqual(sumEven([2, 4, 6]), 12);       // 2 + 4 + 6 = 12
    assert.strictEqual(sumEven([1, 3, 5]), 0);        // No even numbers
  });

  // Test for isDivisibleByThree
  it('checks if a number is divisible by three', () => {
    assert.strictEqual(isDivisibleByThree(3), true);
    assert.strictEqual(isDivisibleByThree(9), true);
    assert.strictEqual(isDivisibleByThree(4), false);
    assert.strictEqual(isDivisibleByThree(0), true);  // 0 is divisible by 3
  });

  // Test for getPersonStreetNo
  it('gets person street number', () => {
    const person: Person = { 
      name: 'Marcus', 
      birthYear: 1972, 
      address: { street: 'Main St', streetNo: 123, city: 'Cityville' }
    };

    const result = getPersonStreetNo(person);
    assert.strictEqual(result, 123);
  });

  // Test for getPersonNameString
  it("prints an IPerson", () => {
    const p1: IPerson = { name: "Marcus", birthYear: 1972 };
    const p2 = { name: "David", birthYear: 1975, drummer: true };

    const p1Address = getPersonNameString(p1);
    const p2Address = getPersonNameString(p2);

    assert.strictEqual(p1Address, "Marcus, 1972");
    assert.strictEqual(p2Address, "David, 1975");
  });

  // Test for PersonClass
  it('get greeting from PersonClass', () => {
    const birthYear = 1972;
    const name = 'Marcus';
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;

    const p = new PersonClass(name, birthYear);
    const result = p.greet();

    assert.strictEqual(result, `Hello Marcus, you are ${expectedAge} years old`);
  });

  // Test for EmployeeClass
  it("using EmployeeClass", () => {
    const p = new PersonClass("Marcus", 1972);
    const e = new EmployeeClass("Marcus Employee", 1972);

    e.employeeId = 12345;

    assert.strictEqual(p.getName(), "Marcus");
    assert.strictEqual(e.getName(), "Marcus Employee");
    assert.strictEqual(e.employeeId, 12345);
  });
});
