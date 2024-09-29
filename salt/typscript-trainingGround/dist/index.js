"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeClass = exports.PersonClass = void 0;
exports.greet = greet;
exports.isOld = isOld;
exports.countOdd = countOdd;
exports.sumEven = sumEven;
exports.isDivisibleByThree = isDivisibleByThree;
exports.getPersonStreetNo = getPersonStreetNo;
exports.getPersonNameString = getPersonNameString;
// Function implementations
function greet(name, birthYear) {
    const age = new Date().getFullYear() - birthYear;
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
    return person.address.streetNo;
}
function getPersonNameString(p) {
    return `${p.name}, ${p.birthYear}`;
}
class PersonClass {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }
    getName() {
        return this.name;
    }
    greet() {
        return `Hello ${this.getName()}, you are ${this.getAge()} years old`;
    }
}
exports.PersonClass = PersonClass;
class EmployeeClass extends PersonClass {
    constructor(name, birthYear) {
        super(name, birthYear);
        this.employeeId = -1;
    }
}
exports.EmployeeClass = EmployeeClass;
//# sourceMappingURL=index.js.map