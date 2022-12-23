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
      `<div class="flex"><p id="box">${element.model} $${element.price}</p> <img id="imag" src="${element.image}"></div>`
    )
  );
}

function buttoninsert() {
  DOMSelectors.div.insertAdjacentHTML(
    "beforeend",
    `<p>${filphone.model}</p> <img src="${filphone.image}">`
  );
  DOMSelectors.div.insertAdjacentHTML(
    "beforeend",
    `<p>${filheadphone.model}</p> <img src="${filheadphone.image}">`
  );
  DOMSelectors.div.insertAdjacentHTML(
    "beforeend",
    `<p>${fillaptop.model}</p> <img src="${fillaptop.image}">`
  );
  DOMSelectors.div.insertAdjacentHTML(
    "beforeend",
    `<p>${filipad.model}</p> <img src="${filipad.image}">`
  );
}
 DOMSelectors.phone.addEventListener("click", function());
insert();
