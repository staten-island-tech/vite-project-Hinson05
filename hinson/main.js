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
filphone.forEach((filphone) => console.log(filphone.name));
const filheadphones = apple.filter((element) => element.type == "Headphones");
filheadphones.forEach((filheadphone) => console.log(filheadphone.name));
const fillaptop = apple.filter((element) => element.type == "Laptop");
fillaptop.forEach((fillaptop) => console.log(fillaptop.name));
const filipad = apple.filter((element) => element.type == "Ipad");
filipad.forEach((filipad) => console.log(filipad.name));
function insert() {
  apple.forEach((element) =>
    DOMSelectors.div.insertAdjacentHTML(
      "beforeend",
      `<p>${element.model}</p> <img src="${element.image}">`
    )
  );
}

function buttoninsert() {
  DOMSelectors.div.insertAdjacentHTML(
    "beforeend",
    `<p>${filphone.name}</p> <img src="${filphone.image}">`
  );
  DOMSelectors.div.insertAdjacentHTML(
    "beforeend",
    `<p>${filheadphone.name}</p> <img src="${filheadphone.image}">`
  );
  DOMSelectors.div.insertAdjacentHTML(
    "beforeend",
    `<p>${fillaptop.name}</p> <img src="${fillaptop.image}">`
  );
  DOMSelectors.div.insertAdjacentHTML(
    "beforeend",
    `<p>${filipad.name}</p> <img src="${filipad.image}">`
  );
}

insert();
buttoninsert();
