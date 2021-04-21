/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["the", "our", "all", "her", "his", "your", "my"];
const adj = ["great", "big", "small", "pretty", "cool", "funny", "amazing"];
const noun = ["jogger", "racoon", "people", "history", "way", "art", "health"];
const extension = [
  ".com",
  ".es",
  ".net",
  ".tk",
  ".cn",
  ".de",
  ".it",
  ".uk",
  ".nl",
  ".ru",
  ".br"
];
window.onload = function() {
  let dominio = "";
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < extension.length; e++) {
          dominio = dominio.concat(pronoun[p], adj[a], noun[n], extension[e]);
          createNodes(dominio);
          dominio = "";
        }
      }
    }
  }
};

function createNodes(dominio) {
  let newItem = document.querySelector("#myId");
  let list = document.createElement("li");
  let textnode = document.createTextNode(dominio);
  list.appendChild(textnode);
  newItem.appendChild(list);
}
