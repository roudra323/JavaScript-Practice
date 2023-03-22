const staff = [
  { name: "bob", age: 20, position: "developer", salary: 100 },
  { name: "peter", age: 25, position: "designer", salary: 300 },
  { name: "susy", age: 30, position: "the boss", salary: 400 },
  { name: "anna", age: 35, position: "intern", salary: 10 },
];

const dailyTotal = staff.reduce((prev, current) => {
  return prev + current.salary;
}, 0);

console.log(dailyTotal);
