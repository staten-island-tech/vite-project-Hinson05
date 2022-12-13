import "./style.css";
import { apple } from "./apple";
const DOMSelectors = {
  phone: document.getElementById("phone"),
  laptop: document.getElementById("laptop"),
  ipad: document.getElementById("ipad"),
  headphones: document.getElementById("headphones"),
  div: document.getElementById("app"),
};

function filtration() {
  const filphone = apple.filter(element.type == "Phone");
  const filheadphones = apple.filter(element.type == "Headphones");
  const fillaptop = apple.filter(element.type == "Laptop");
  const filipad = apple.filter(element.type == "Ipad");
}

function insert() {
  apple.foreach((element) =>
    DOMSelectors.div.insertAdjacentHTML(
      "beforeend",
      `<p>${apple.name}</p> <img src="${element.image}"`
    )
  );
}

insert();
