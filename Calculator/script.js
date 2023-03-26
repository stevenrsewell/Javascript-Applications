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

document.addEventListener("keydown", function(event) {
  let keyCode = event.keyCode;
  let key = event.key;
  
  // If the user types a number, append it to the display
  if (keyCode >= 48 && keyCode <= 57) {
    appendToDisplay(key);
  }
  
  // If the user types a decimal point, append it to the display
  if (keyCode === 190 || keyCode === 110) {
    appendToDisplay(".");
  }
  
  // If the user types an operator, append it to the display
  if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendToDisplay(key);
  }
  
  // If the user types "Enter", calculate the result
  if (keyCode === 13) {
    calculate();
  }
  
  // If the user types "Backspace", clear the display
  if (keyCode === 8) {
    clearDisplay();
  }
});
