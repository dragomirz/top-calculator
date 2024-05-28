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
let valueOne = '';
let valueTwo = '';
let operator = '';
let display = document.getElementById("value");
let result = '';
function operate(valueOne, valueTwo, operate){
    switch (operate){
        case '+':
            return add(valueOne, valueTwo);
        case '-':
            return subtract(valueOne, valueTwo);
        case '/':
            return divide(valueOne, valueTwo);
        case '*':
            return multiply(valueOne, valueTwo);
        default:
            alert("Operator is wrong!");
    }
}

function updateDisplay(value) {
    let boolForDisplay = display.textContent==="/"||display.textContent==="+"||display.textContent==="*"||display.textContent==="-";
    let boolForValue = value==='+'||value==='-'||value==='*'||value==='/';
    let boolForNumberValue = value==='0'||value==='1'||value==='2'||value==='3'||value==='4'||value==='5'||value==='6'||value==='7'||value==='8'||value==='9';
    if(boolForNumberValue && !boolForDisplay){
        display.textContent += value;
    } else if(boolForNumberValue && boolForDisplay && valueOne !== ''){
        if(boolForDisplay){
            operator = display.textContent;
            display.textContent = value;
            console.log(operator);
        } else {
            display.textContent += value;
        }
    } else if(boolForValue && boolForDisplay){
        display.textContent = value;
    } else if(boolForValue && valueOne==='') {
        valueOne = Number(display.textContent);
        display.textContent = value;
        console.log(valueOne);
    }
    if (value==='='){
        valueTwo = Number(display.textContent);
        result = operate(valueOne, valueTwo, operator)
        display.textContent = result;
        valueOne = result;
        valueTwo = '';
        operator = '';
    }

}


