
import { greet, isOld } from "./index";
function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
  function isOld(age: number): boolean {
    return age >= 35;
  }
}  
  export { greet, isOld };

