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


type Order = {
  orderId: number;  
  totalAmount: number;
};


export const greet = (name: string, birthYear: number): string => 
  `Hello ${name}, you are ${new Date().getFullYear() - birthYear} years old`;

export const isOld = (age: number): boolean => age >= 35;

export const countOdd = (arr: number[]): number => arr.filter((num) => num % 2 !== 0).length;

export const sumEven = (arr: number[]): number => 
  arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);

export const isDivisibleByThree = (num: number): boolean => num % 3 === 0;

export const getPersonStreetNo = (person: Person): number => person.address.streetNo;


export const getPersonNameString = (p: IPerson) => `${p.name}, ${p.birthYear.toString()}`;

const addToStart = <T>(list: T[], itemToAdd: T): T[] => {
  return [itemToAdd, ...list];
};

export const optionallyAdd = (
  num1: number, 
  num2: number, 
  num3: number = 0, 
  num4: number = 0, 
  num5: number = 0
): number => num1 + num2 + num3 + num4 + num5;


export const greetPeople = (greeting: string, ...names: string[]): string => 
  `${greeting} ${names.join(' and ')}`.trim();


export const printThis = (thing: Person | Address | Order | null | undefined): string => {
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


export class PersonClass {
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

export class EmployeeClass extends PersonClass {
  employeeId: number = -1;

  constructor(name: string, birthYear: number) {
    super(name, birthYear);
  }
}
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



export { IPerson, Order };
