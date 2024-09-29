// Types
type Address = {
  street: string;
  streetNo: number;
  city: string;
};

type Person = {
  name: string;
  birthYear: number;
  address: Address;
};

interface IPerson {
  name: string;
  birthYear: number;
}

// Define the Order type and export it
type Order = {
  orderId: string;
  totalAmount: number;
};

// Arrow functions

// Refactored greet to arrow function
const greet = (name: string, birthYear: number): string => 
  `Hello ${name}, you are ${new Date().getFullYear() - birthYear} years old`;

// Refactored isOld to arrow function
const isOld = (age: number): boolean => age >= 35;

// Refactored countOdd to arrow function
const countOdd = (arr: number[]): number => arr.filter((num) => num % 2 !== 0).length;

// Refactored sumEven to arrow function
const sumEven = (arr: number[]): number => 
  arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);

// Refactored isDivisibleByThree to arrow function
const isDivisibleByThree = (num: number): boolean => num % 3 === 0;

// Refactored getPersonStreetNo to arrow function
const getPersonStreetNo = (person: Person): number => person.address.streetNo;

// Updated getPersonNameString with inferred return type
const getPersonNameString = (p: IPerson) => `${p.name}, ${p.birthYear.toString()}`;

// Refactored optionallyAdd with default values
const optionallyAdd = (
  num1: number, 
  num2: number, 
  num3: number = 0, 
  num4: number = 0, 
  num5: number = 0
): number => num1 + num2 + num3 + num4 + num5;

// New greetPeople function with rest parameters
const greetPeople = (greeting: string, ...names: string[]): string => 
  `${greeting} ${names.join(' and ')}`.trim();

// Union types for printThis function
const printThis = (thing: Person | Address | Order | null | undefined): string => {
  if (!thing) return "no person supplied";
  
  if ('name' in thing) {
    return `Person: ${thing.name}, Age: ${new Date().getFullYear() - thing.birthYear}`;
  } else if ('street' in thing) {
    return `Address: ${thing.street}, No: ${thing.streetNo}, City: ${thing.city}`;
  } else if ('orderId' in thing) {
    return `Order ID: ${thing.orderId}, Total: $${thing.totalAmount}`;
  } else {
    return "Unknown type!";
  }
};

// Classes

class PersonClass {
  private name: string;
  private birthYear: number;

  constructor(name: string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getAge = (): number => new Date().getFullYear() - this.birthYear;

  getName = (): string => this.name;

  greet = (): string => `Hello ${this.getName()}, you are ${this.getAge()} years old`;
}

class EmployeeClass extends PersonClass {
  employeeId: number = -1;

  constructor(name: string, birthYear: number) {
    super(name, birthYear);
  }
}

// Exporting functions and classes
export { 
  greet, 
  isOld, 
  countOdd, 
  sumEven, 
  isDivisibleByThree, 
  getPersonStreetNo, 
  Address, 
  Person, 
  PersonClass, 
  EmployeeClass, 
  getPersonNameString, 
  optionallyAdd, 
  greetPeople, 
  printThis, 
  IPerson,   // Export IPerson
  Order      // Export Order
};
