/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dom = [".com", ".es", ".io", ".uy", ".net", ".us"];
function randomPosition(array) {
  let randomPosition;
  randomPosition = Math.floor(Math.random() * array.length);
  return randomPosition;
}

function total() {
  let domainTotal = [];
  domainTotal =
    pronoun[randomPosition(pronoun)] +
    adj[randomPosition(adj)] +
    noun[randomPosition(noun)] +
    dom[randomPosition(dom)];
  return domainTotal;
}

let elementModify = document.querySelector("#changeText");

elementModify.addEventListener("click", () => {
  elementModify.innerHTML = total();
});
