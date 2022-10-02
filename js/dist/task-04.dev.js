"use strict";

var counterValue = 0;
var btnDec = document.querySelector("button[data-action=\"decrement\"]");
var btnInc = document.querySelector("button[data-action=\"increment\"]");
var counter = document.querySelector("span#value");
counter.textContent = "".concat(counterValue);

var handleClickDec = function handleClickDec() {
  counter.textContent = "".concat(counterValue -= 1);
};

var handleClickInc = function handleClickInc() {
  counter.textContent = "".concat(counterValue += 1);
};

btnDec.addEventListener("click", handleClickDec);
btnInc.addEventListener("click", handleClickInc);