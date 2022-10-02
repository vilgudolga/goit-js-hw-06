"use strict";

var sizeSlider = document.querySelector("#font-size-control");
var text = document.querySelector("#text");

var setFontSize = function setFontSize() {
  var sliderValue = sizeSlider.value + "px";
  text.style.fontSize = sliderValue;
};

sizeSlider.addEventListener("input", setFontSize);