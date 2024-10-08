import assert from "assert";
import { IPerson, Address, Order, addToStart, Wrapper, getPersonNameString } from "./index"; 


describe("Person Tests", () => {
  it("should return person's name and birth year", () => {
    const person: IPerson = { name: "Marcus", birthYear: 1972 };
    const result = getPersonNameString(person);
    assert.strictEqual(result, "Marcus, 1972");
  });
});


describe("Address Tests", () => {
  it("should correctly represent address", () => {
    const address: Address = { street: "Strålgatan", streetNo: 23, city: "Stockholm" };
    assert.strictEqual(address.street, "Strålgatan");
    assert.strictEqual(address.streetNo, 23);
    assert.strictEqual(address.city, "Stockholm");
  });
});


describe("Order Tests", () => {
  it("should correctly represent order", () => {
    const order: Order = { orderId: 12345, totalAmount: 299.99 }; // Ensure orderId is a number
    assert.strictEqual(order.orderId, 12345);
    assert.strictEqual(order.totalAmount, 299.99);
  });
});

describe("Generics Tests", () => {
  it("add to list of people", () => {
   
    const listOfPeople: IPerson[] = [{ name: "Marcus", birthYear: 1972 }];


    const numberOfPeople = addToStart<IPerson>(listOfPeople, {
      name: "David",
      birthYear: 1975,
    });


    assert.strictEqual(numberOfPeople[0].name, "David");
    assert.strictEqual(numberOfPeople[1].name, "Marcus");
  });

  it("add to list of addresses", () => {

    const listOfAddresses: Address[] = [
      { street: "Strålgatan", streetNo: 23, city: "Stockholm" },
      { street: "SchraeschazschStrasse", streetNo: 2, city: "Amsterdam" },
    ];


    const numberOfAddresses = addToStart<Address>(listOfAddresses, {
      street: "Champs Elysee",
      streetNo: 1,
      city: "Paris",
    });

 
    assert.strictEqual(numberOfAddresses[0].city, "Paris");
    assert.strictEqual(numberOfAddresses[1].city, "Stockholm");
  });

  it("wrapper for addresses", () => {

    const listOfAddresses: Address[] = [
      { street: "Strålgatan", streetNo: 23, city: "Stockholm" },
      { street: "SchraeschazschStrasse", streetNo: 2, city: "Amsterdam" },
      { street: "Champs Elysee", streetNo: 1, city: "Paris" },
    ];


    const list = new Wrapper<Address>(listOfAddresses);


    assert.strictEqual(list.getFirst().city, "Stockholm");
    assert.strictEqual(list.getLast().city, "Paris");
  });

  it("wrapper for people", () => {

    const listOfPeople: IPerson[] = [
      { name: "Marcus", birthYear: 1972 },
      { name: "David", birthYear: 1975 },
    ];


    const peopleList = new Wrapper<IPerson>(listOfPeople);


    assert.strictEqual(peopleList.getFirst().name, "Marcus");
    assert.strictEqual(peopleList.getLast().name, "David");
  });
});
