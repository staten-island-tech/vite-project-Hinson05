import "./style.css";
import { apple } from "./apple";
const DOMSelectors = {
  submit: document.getElementById("submit"),
  list: document.getElementById("list"),
  name: document.getElementById("name"),
  num: document.getElementById("num"),
  clear: document.getElementById("clear"),
  delete: document.getElementById("delete"),
};
setupCounter(document.querySelector("#counter"));
