function greet(name: string, birthYear: number): string {
    const age = new Date().getFullYear() - birthYear; // Calculate age based on the current year and birth year
    return `Hello ${name}, you are ${age} years old`; // Return greeting message with name and age
  }
  
  export { greet }; // Export the greet function for use in tests and other modules