const display = document.getElementById("display");

function showValue(input) {
  display.value += input;
}

function clearDisplay() {
display.value = "";
}

function calculate() {
display.value = eval(display.value);
}