const spanOutput = document.querySelector("span#name-output");
const input = document.querySelector("input#name-input")
spanOutput.textContent = "Anonymous";
input.addEventListener("input", (event) => {
      if (!event.currentTarget.value) spanOutput.textContent = "Anonymous";
      else spanOutput.textContent = `${event.currentTarget.value}`;
})