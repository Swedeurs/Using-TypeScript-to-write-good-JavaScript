
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

type Order = {
  orderId: number;  
  totalAmount: number;
};


const addToStart = <T>(list: T[], itemToAdd: T): T[] => {
  return [itemToAdd, ...list];
};


class Wrapper<T> {
  private list: T[];

  constructor(list: T[]) {
    this.list = list;
  }

  public getFirst(): T {
    return this.list[0];
  }

  public getLast(): T {
    return this.list[this.list.length - 1];
  }
}

const greet = (name: string, birthYear: number): string => 
  `Hello ${name}, you are ${new Date().getFullYear() - birthYear} years old`;

const isOld = (age: number): boolean => age >= 35;

const countOdd = (arr: number[]): number => arr.filter((num) => num % 2 !== 0).length;

const sumEven = (arr: number[]): number => 
  arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);

const isDivisibleByThree = (num: number): boolean => num % 3 === 0;

const getPersonStreetNo = (person: Person): number => person.address.streetNo;

const getPersonNameString = (p: IPerson) => `${p.name}, ${p.birthYear.toString()}`;

const optionallyAdd = (
  num1: number, 
  num2: number, 
  num3: number = 0, 
  num4: number = 0, 
  num5: number = 0
): number => num1 + num2 + num3 + num4 + num5;

const greetPeople = (greeting: string, ...names: string[]): string => 
  `${greeting} ${names.join(' and ')}`.trim();

const printThis = (thing: Person | Address | Order | null | undefined): string => {
  if (!thing) return "no person supplied";
  
  if ('name' in thing) {
    return `Person: ${thing.name}, Age: ${new Date().getFullYear() - thing.birthYear}`;
  } else if ('street' in thing) {
    return `Address: ${thing.street}, No: ${thing.streetNo.toString()}, City: ${thing.city}`;
  } else if ('orderId' in thing) {
    return `Order ID: ${thing.orderId}, Total: $${thing.totalAmount.toString()}`;
  } else {
    return "Unknown type!";
  }
};

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

// Export all necessary items
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
  IPerson,   
  Order,
  addToStart, 
  Wrapper 
};  
