/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let tld = [".com", ".es", ".io", ".uy", ".net", ".us"];
let domainNames = [];

for (let pro of pronoun) {
  for (let ad of adj) {
    for (let no of noun) {
      for (let tl of tld) {
        domainNames.push(`${pro}${ad}${no}${tl}`);
      }
    }
  }
}

let elementModify = document.querySelector("#changeText");

elementModify.addEventListener("click", () => {
  elementModify.innerHTML =
    domainNames[Math.floor(Math.random() * domainNames.length)];
});
