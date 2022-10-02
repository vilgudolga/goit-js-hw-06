"use strict";

var spanOutput = document.querySelector("span#name-output");
var input = document.querySelector("input#name-input");
spanOutput.textContent = "Anonymous";
input.addEventListener("input", function (event) {
  if (!event.currentTarget.value) spanOutput.textContent = "Anonymous";else spanOutput.textContent = "".concat(event.currentTarget.value);
});