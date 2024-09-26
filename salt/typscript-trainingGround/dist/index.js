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
// Existing functions...
function greet(name, birthYear) {
    const age = new Date().getFullYear() - birthYear;
    return `Hello ${name}, you are ${age} years old`;
}
function isOld(age) {
    return age >= 35; // Returns true if age is 35 or older
}
function countOdd(arr) {
    return arr.filter((num) => num % 2 !== 0).length; // Count odd numbers in the array
}
function sumEven(arr) {
    return arr.filter((num) => num % 2 === 0) // Filter even numbers
        .reduce((acc, num) => acc + num, 0); // Sum the even numbers
}
function isDivisibleByThree(num) {
    return num % 3 === 0; // Returns true if num is divisible by 3
}
//# sourceMappingURL=index.js.map