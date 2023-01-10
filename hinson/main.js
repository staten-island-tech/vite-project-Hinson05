import "./style.css";
import { apple } from "./apple";
const DOMSelectors = {
  phone: document.getElementById("phone"),
  laptop: document.getElementById("laptop"),
  ipad: document.getElementById("ipad"),
  headphones: document.getElementById("headphones"),
  div: document.getElementById("app"),
};
const toggle = document.getElementById("dark");
const body = document.querySelector("site");
toggle.addEventListener("click", function () {
  site.style.background = "black";
  site.style.color = "white";
});

const toggle2 = document.getElementById("light");
toggle2.addEventListener("click", function () {
  site.style.background = "white";
  site.style.color = "black";
});

function insert() {
  apple.forEach((element) =>
    DOMSelectors.div.insertAdjacentHTML(
      "beforeend",
      `<div class="flex"><p id="box">${element.model} ${element.price}</p> <img id="imag" src="${element.image}"></div>`
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

DOMSelectors.phone.addEventListener("click", function () {
  const filphone = apple.filter((element) => element.type == "Phone");
  console.log(filphone);
  DOMSelectors.div.innerHTML = "";
  filphone.forEach((element) =>
    DOMSelectors.div.insertAdjacentHTML(
      "afterend",
      `<div class="flex><p>${element.model}</p> <img src="${element.image}</div>">`
    )
  );
});

DOMSelectors.ipad.addEventListener("click", function () {
  const filipad = apple.filter((element) => element.type == "Ipad");
  filipad.forEach((filipad) => console.log(filipad.name));
  DOMSelectors.div.insertAdjacentHTML(
    "afterend",
    `<p>${filipad.model}</p> <img src="${filphone.image}">`
  );
});
DOMSelectors.headphones.addEventListener("click", function () {
  const filheadphones = apple.filter((element) => element.type == "Headphones");
  filheadphones.forEach((filheadphone) => console.log(filheadphone.name));
  DOMSelectors.div.insertAdjacentHTML(
    "afterend",
    `<p>${filheadphones.model}</p> <img src="${filphone.image}">`
  );
});
DOMSelectors.laptop.addEventListener("click", function () {
  const fillaptop = apple.filter((element) => element.type == "Laptop");
  fillaptop.forEach((fillaptop) => console.log(fillaptop.name));
  DOMSelectors.div.insertAdjacentHTML(
    "afterend",
    `<p>${fillaptop.model}</p> <img src="${filphone.image}">`
  );
});
insert();
