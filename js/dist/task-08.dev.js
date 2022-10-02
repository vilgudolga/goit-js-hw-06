"use strict";

var form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var _event$currentTarget$ = event.currentTarget.elements,
      email = _event$currentTarget$.email,
      password = _event$currentTarget$.password;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log("email: ".concat(email.value, ", Password: ").concat(password.value));
  event.currentTarget.reset();
}