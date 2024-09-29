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

type Order = {
  orderId: number;
  totalAmount: number;
};


function printThis(thing: Person | Address | Order | null | undefined): string {
  if (!thing) {
    return "no person supplied";
  }

  if ("name" in thing) {
    return `Person: ${thing.name}, Age: ${new Date().getFullYear() - thing.birthYear}`;
  } else if ("street" in thing) {
    return `Address: ${thing.street}, No: ${thing.streetNo}, City: ${thing.city}`;
  } else if ("orderId" in thing) {
    return `Order ID: ${thing.orderId}, Total: $${thing.totalAmount}`;
  } else {
    return "Unknown type!";
  }
}

// Other utility functions
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

// Export everything
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
  Order,  
  IPerson, 
  PersonClass, 
  EmployeeClass,
  printThis  
};
