// Calculator

const display = document.querySelector("#display");
console.log(display);

function appendToDisplay(character) {
    display.value += character;
}

function calculate() {
    if (display.value == "") {
        display.value = "";
    } else {
        try {
            display.value = eval(display.value);
        } catch (SyntaxError) {
            display.value = "Err";
        }
    }
}

function clearDisplay() {
    display.value = "";
}