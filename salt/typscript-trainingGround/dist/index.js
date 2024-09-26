"use strict";
// index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = greet;
exports.isOld = isOld;
exports.countOdd = countOdd;
exports.sumEven = sumEven;
exports.isDivisibleByThree = isDivisibleByThree;
exports.getPersonStreetNo = getPersonStreetNo;
function greet(name, birthYear) {
    const age = new Date().getFullYear() - birthYear; // Calculate age based on current year
    return `Hello ${name}, you are ${age} years old`;
}
function isOld(age) {
    return age >= 35;
}
function countOdd(arr) {
    return arr.filter((num) => num % 2 !== 0).length;
}
function sumEven(arr) {
    return arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}
function isDivisibleByThree(num) {
    return num % 3 === 0;
}
function getPersonStreetNo(person) {
    return person.address.streetNo; // Return the street number from the person's address
}
//# sourceMappingURL=index.js.map