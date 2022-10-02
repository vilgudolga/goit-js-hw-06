"use strict";

var button = document.querySelector("button.change-color");
var colorName = document.querySelector("div.widget>p>span.color");
var body = document.querySelector("body");

function getRandomHexColor() {
  return "#".concat(Math.floor(Math.random() * 16777215).toString(16));
}

button.addEventListener("click", function (e) {
  body.style.backgroundColor = "".concat(getRandomHexColor());
  colorName.textContent = "".concat(getRandomHexColor());
});