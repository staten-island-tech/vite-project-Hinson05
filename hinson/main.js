import "./style.css";
import { apple } from "./apple";
const DOMSelectors = {
  phone: document.getElementById("phone"),
  laptop: document.getElementById("laptop"),
  ipad: document.getElementById("ipad"),
  headphones: document.getElementById("headphones"),
  div: document.getElementById("app"),
};

const filphone = apple.filter((element) => element.type == "Phone");
const filheadphones = apple.filter((element) => element.type == "Headphones");
const fillaptop = apple.filter((element) => element.type == "Laptop");
const filipad = apple.filter((element) => element.type == "Ipad");

function insert() {
  apple.forEach((element) =>
    DOMSelectors.div.insertAdjacentHTML(
      "beforeend",
      `<p>${element.model}</p> <img src="${element.image}">`
    )
  );
}

insert();
