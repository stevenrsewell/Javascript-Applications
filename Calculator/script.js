let display = document.getElementById("display");

function appendToDisplay(value) {
  display.innerHTML += value;
}

function clearDisplay() {
  display.innerHTML = "";
}

function calculate() {
  let expression = display.innerHTML;
  let result = eval(expression);
  display.innerHTML = result;
}
