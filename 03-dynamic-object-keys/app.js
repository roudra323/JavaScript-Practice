const state = {
  loading: false,
  name: "John",
  age: 30,
  message: "Hello",
};

// state.address = "123 Main St";

// console.log(state);

function updateState(key, value) {
  state[key] = value;
}

updateState("address", "123 Main St");
updateState("products", 10);

console.log(state);
