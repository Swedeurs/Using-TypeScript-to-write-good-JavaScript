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
  Order, 
  printThis,
  optionallyAdd,
  greetPeople
} from './index'; // Import from your main module

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

  // ADD NEW TESTS HERE

  it("prints an IPerson", () => {
    const p1 = { name: "Marcus", birthYear: 1972 };
    const p2 = { name: "David", birthYear: 1975, drummer: true };

    const p1Address = getPersonNameString(p1);
    const p2Address = getPersonNameString(p2);

    assert.strictEqual(p1Address, "Marcus, 1972");
    assert.strictEqual(p2Address, "David, 1975");
  });
  
  it('get greeting from PersonClass', () => {
    const birthYear = 1972;
    const name = 'Marcus';
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthYear;

    const p = new PersonClass(name, birthYear);
    const result = p.greet();

    assert.strictEqual(result, `Hello Marcus, you are ${expectedAge} years old`);
  });

  it("using EmployeeClass", () => {
    const p = new PersonClass("Marcus", 1972);
    const e = new EmployeeClass("Marcus Employee", 1972);

    e.employeeId = 12345;

    assert.strictEqual(p.getName(), "Marcus");
    assert.strictEqual(e.getName(), "Marcus Employee");
    assert.strictEqual(e.employeeId, 12345);
  });

  it("optional parameters in optionallyAdd function", () => {
    assert.strictEqual(optionallyAdd(1, 2), 3);
    assert.strictEqual(optionallyAdd(1, 2, 3), 6);
    assert.strictEqual(optionallyAdd(1, 2, 3, 4, 5), 15);
    assert.strictEqual(optionallyAdd(1, 2, 0, 0, 0), 3); 
  });

  it("greetPeople with rest parameters", () => {
    assert.strictEqual(greetPeople("Hello"), "Hello");
    assert.strictEqual(greetPeople("Hello", "Marcus"), "Hello Marcus");
    assert.strictEqual(greetPeople("Hello", "Marcus", "Dasha"), "Hello Marcus and Dasha");
    assert.strictEqual(greetPeople("Hello", "Marcus", "Dasha", "David"), "Hello Marcus and Dasha and David");
  });

  it("prints a valid Order", () => {
    const order: Order = { orderId: 12345, totalAmount: 299.99 };
    const result = printThis(order);
    assert.strictEqual(result, "Order ID: 12345, Total: $299.99");
  });

  it("handles null input in printThis", () => {
    const result = printThis(null);
    assert.strictEqual(result, "no person supplied");
  });

  it("handles undefined input in printThis", () => {
    const result = printThis(undefined);
    assert.strictEqual(result, "no person supplied");
  });

});
