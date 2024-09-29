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
  IPerson, 
  Person, 
  Address, 
  Order,  
  printThis  
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


  it('gets person street number', () => {
    const person: Person = { 
      name: 'Marcus', 
      birthYear: 1972, 
      address: { street: 'Main St', streetNo: 123, city: 'Cityville' }
    };

    const result = getPersonStreetNo(person);
    assert.strictEqual(result, 123);
  });

 
  it("handles different types in printThis", () => {
    const person: Person = { 
      name: 'Alice', 
      birthYear: 1990, 
      address: { street: 'Elm St', streetNo: 456, city: 'Gotham' }
    };
    const address: Address = { street: 'Main St', streetNo: 789, city: 'Springfield' };
    const order: Order = { orderId: 12345, totalAmount: 299.99 };


    const resultPerson = printThis(person);
    const resultAddress = printThis(address);
    const resultOrder = printThis(order);
    const resultNull = printThis(null);
    const resultUndefined = printThis(undefined);


    assert.strictEqual(resultPerson, `Person: Alice, Age: ${new Date().getFullYear() - 1990}`);
    assert.strictEqual(resultAddress, 'Address: Main St, No: 789, City: Springfield');
    assert.strictEqual(resultOrder, 'Order ID: 12345, Total: $299.99');
    assert.strictEqual(resultNull, 'no person supplied');
    assert.strictEqual(resultUndefined, 'no person supplied');
  });
  

});
