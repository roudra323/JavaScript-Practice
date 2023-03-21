const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "susy",
    age: 30,
    position: "the boss",
  },
  {
    name: "john",
    age: 26,
    position: "intern",
  },
];

const info = people.map((person) => {
  //   console.log(
  //     `Name : ${person.name}, Age : ${person.age}, Position : ${person.position}`
  //   );

  //   console.log(person);

  return person;
});
