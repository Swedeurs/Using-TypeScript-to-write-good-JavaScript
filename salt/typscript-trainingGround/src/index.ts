// index.ts

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

function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear; // Calculate age based on current year
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
  return person.address.streetNo; // Return the street number from the person's address
}

export { 
  greet, 
  isOld, 
  countOdd, 
  sumEven, 
  isDivisibleByThree, 
  getPersonStreetNo, 
  Address, 
  Person 
};
