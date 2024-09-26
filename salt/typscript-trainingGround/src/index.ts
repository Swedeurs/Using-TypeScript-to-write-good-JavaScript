function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}

function isOld(age: number): boolean {
  return age >= 35; // Returns true if age is 35 or older
}

function countOdd(numbers: number[]): number {
  return numbers.filter(num => num % 2 !== 0).length; // Filter odd numbers and count them
}

// Exporting all functions
export { greet, isOld, countOdd };
