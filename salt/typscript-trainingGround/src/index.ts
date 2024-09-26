function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}

function isOld(age: number): boolean {
  return age >= 35; // Returns true if age is 35 or older
}

function countOdd(numbers: number[]): number {
  // Ensure the input is an array of numbers
  if (!Array.isArray(numbers) || !numbers.every(num => typeof num === 'number')) {
      throw new Error("Input must be an array of numbers");
  }
  const oddCount = numbers.filter(num => num % 2 !== 0).length;
  return oddCount; // Return the count of odd numbers
}

// New function to check if a number is divisible by 3
function isDivisibleByThree(num: number): boolean {
  return num % 3 === 0; // Returns true if num is divisible by 3
}

// Exporting all functions
export { greet, isOld, countOdd, isDivisibleByThree };
