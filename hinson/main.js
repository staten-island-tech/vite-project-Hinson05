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

DOMSelectors.phone.addEventListener("click", function () {
  const filphone = apple.filter((element) => element.type == "Phone");
  console.log(filphone);
  DOMSelectors.div.innerHTML = "";
  filphone.forEach((element) =>
    DOMSelectors.div.insertAdjacentHTML(
      "afterend",
      `<div class= "flex" ><p>${element.model}</p><img src = '${element.image}'></div>`
    )
  );
});

DOMSelectors.ipad.addEventListener("click", function () {
  const filipad = apple.filter((element) => element.type == "Ipad");
  console.log(filipad);
  DOMSelectors.div.innerHTML = "";
  filipad.forEach((element) =>
    DOMSelectors.div.insertAdjacentHTML(
      "afterend",
      `<div class= "flex"><p>${element.model}</p><img src = '${element.image}'></div>`
    )
  );
});
DOMSelectors.headphones.addEventListener("click", function () {
  const filheadphones = apple.filter((element) => element.type == "Headphones");
  console.log(filheadphones);
  DOMSelectors.div.innerHTML = "";
  filheadphones.forEach((element) =>
    DOMSelectors.div.insertAdjacentHTML(
      "afterend",
      `<div class= "flex"><p>${element.model}</p><img src = '${element.image}'></div>`
    )
  );
});
DOMSelectors.laptop.addEventListener("click", function () {
  const fillaptop = apple.filter((element) => element.type == "Laptop");
  console.log(fillaptop);
  DOMSelectors.div.innerHTML = "";
  fillaptop.forEach((element) =>
    DOMSelectors.div.insertAdjacentHTML(
      "afterend",
      `<div class="flex"><p>${element.model}</p><img src = '${element.image}'></div>`
    )
  );
});
insert();
