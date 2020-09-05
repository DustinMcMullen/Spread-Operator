import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var citrus = ["lemon", "lime", "orange", "grapefruit"];
var fruit = ["apple", "banana", "watermellon", ...citrus];

const fullName = {
  firstName: "James",
  lastName: "Bond"
};

const user = {
  ...fullName,
  id: "007",
  weapon: "Golden Gun"
};
console.log(user);
