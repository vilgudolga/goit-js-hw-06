"use strict";

var input = document.querySelector("#validation-input");
var dataLength = input.getAttribute("data-length");
input.addEventListener("blur", function () {
  if (input.value.length == dataLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});