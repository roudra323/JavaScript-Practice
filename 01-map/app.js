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

const info = people.map(
  (person) =>
    `<h2>Name : ${person.name}<h2> <h2>Age : ${person.age}<h2> <h2>Position : ${person.position}<h2/><hr/>`
);

const result = document.querySelector("#result");

result.innerHTML = info.join("");
