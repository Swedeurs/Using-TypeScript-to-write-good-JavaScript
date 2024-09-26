// Define the Address type
type Address = {
  street: string;
  streetNo: number;
  city: string;
};

// Define the Person type
type Person = {
  name: string;
  birthYear: number;
  address: Address;
};

// Function to greet a person
function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear; // Calculate age
  return `Hello ${name}, you are ${age} years old`; // Return greeting message
}

// Function to check if a person is old
function isOld(age: number): boolean {
  return age >= 35; // Returns true if age is 35 or older
}

// Function to count odd numbers in an array
function countOdd(arr: number[]): number {
  return arr.filter((num) => num % 2 !== 0).length; // Count odd numbers in the array
}

// Function to sum even numbers in an array
function sumEven(arr: number[]): number {
  return arr.filter((num) => num % 2 === 0) // Filter even numbers
            .reduce((acc, num) => acc + num, 0); // Sum the even numbers
}

// Function to check if a number is divisible by 3
function isDivisibleByThree(num: number): boolean {
  return num % 3 === 0; // Returns true if num is divisible by 3
}

// Exporting all functions and types
export { greet, isOld, countOdd, sumEven, isDivisibleByThree, Address, Person };
