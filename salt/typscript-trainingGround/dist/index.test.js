"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = greet;
exports.isOld = isOld;
exports.countOdd = countOdd;
exports.sumEven = sumEven;
exports.isDivisibleByThree = isDivisibleByThree;
// Sample object of type Person
const p = {
    name: "Marcus",
    birthYear: 1972,
    address: {
        street: "Strålgatan",
        streetNo: 23,
        city: "Stockholm",
    },
};
// Function to greet a person
function greet(name, birthYear) {
    const age = new Date().getFullYear() - birthYear;
    return `Hello ${name}, you are ${age} years old`;
}
// Function to check if a person is old
function isOld(age) {
    return age >= 35; // Returns true if age is 35 or older
}
// Function to count odd numbers in an array
function countOdd(arr) {
    return arr.filter((num) => num % 2 !== 0).length; // Count odd numbers in the array
}
// Function to sum even numbers in an array
function sumEven(arr) {
    return arr.filter((num) => num % 2 === 0) // Filter even numbers
        .reduce((acc, num) => acc + num, 0); // Sum the even numbers
}
// Function to check if a number is divisible by 3
function isDivisibleByThree(num) {
    return num % 3 === 0; // Returns true if num is divisible by 3
}
//# sourceMappingURL=index.test.js.map