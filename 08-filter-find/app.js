const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "intern" },
];

const age = people.filter((person) => person.age > 25);
const position = people.filter((person) => person.position == "developer");

console.log(age);
console.log(position);

const fruits = ["orange", "banana", "lemon"];

const find = fruits.filter((item) => {
  if (item != "lemon") {
    console.log(item);
    return item;
  }
});

console.log(find);
