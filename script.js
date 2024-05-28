function add (a, b){
    return a + b;
}
function subtract (a, b){
    return a - b;
}
function multiply (a, b){
    return a * b;
}
function divide (a, b){
    return b!==0?a/b:"Lmao";
}
console.log(add(5, 6),
    multiply(5, 6),
    subtract(5, 6),
    divide(5, 6),
    divide(110, 0));
console.log(1);
let valueOne;
let valueTwo;
let operator;
let display = document.getElementById("value");
function operate(valueOne, valueTwo, operate){
    switch (operate){
        case '+':
            add(valueOne, valueTwo);
            break;
        case '-':
            subtract(valueOne, valueTwo);
            break;
        case '/':
            divide(valueOne, valueTwo);
            break;
        case '*':
            multiply(valueOne, valueTwo);
            break;
        default:
            alert("Operator is wrong!");
    }
}

function updateDisplay(value) {
    display.textContent += value ;

}

