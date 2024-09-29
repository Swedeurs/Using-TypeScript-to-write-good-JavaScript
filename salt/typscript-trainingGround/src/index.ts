// Type definitions
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

// Function implementations
function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}

function isOld(age: number): boolean {
  return age >= 35;
}

function countOdd(arr: number[]): number {
  return arr.filter((num) => num % 2 !== 0).length;
}

function sumEven(arr: number[]): number {
  return arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}

function isDivisibleByThree(num: number): boolean {
  return num % 3 === 0;
}

function getPersonStreetNo(person: Person): number {
  return person.address.streetNo;
}

function getPersonNameString(p: IPerson): string {
  return `${p.name}, ${p.birthYear}`;
}

// Interface and class definitions
interface IPerson {
  name: string;
  birthYear: number;
}

class PersonClass {
  private name: string;
  private birthYear: number;

  constructor(name: string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getAge(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  getName(): string {
    return this.name;
  }

  greet(): string {
    return `Hello ${this.getName()}, you are ${this.getAge()} years old`;
  }
}

class EmployeeClass extends PersonClass {
  employeeId: number = -1;

  constructor(name: string, birthYear: number) {
    super(name, birthYear);
  }
}

// Exporting all necessary functions and types
export { 
  greet, 
  isOld, 
  countOdd, 
  sumEven, 
  isDivisibleByThree, 
  getPersonStreetNo, 
  getPersonNameString, 
  Address, 
  Person, 
  IPerson,
  PersonClass, 
  EmployeeClass 
};
