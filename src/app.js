/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function randomDomain(array) {
  let randomPosition;
  randomPosition = Math.floor(Math.random() * array.length);
  return randomPosition;
}

function total() {
  let domainTotal = [];
  domainTotal =
    pronoun[randomDomain(pronoun)] +
    adj[randomDomain(adj)] +
    noun[randomDomain(noun)] +
    ".com";
  return domainTotal;
}
let elementModify = document.querySelector("#changeText");

elementModify.addEventListener("click", () => {
  elementModify.innerHTML = total();
});
