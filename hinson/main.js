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
  const phone = apple.filter(apple.type === "Phone");
  const headphones = apple.filter(apple.type === "Headphones");
  const laptop = apple.filter(apple.type === "Laptop");
  const iphone = apple.filter(apple.type === "Iphone");
}
