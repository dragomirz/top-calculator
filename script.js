
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
let decimalOne = '';
let decimalTwo = '';

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
    let boolidek = boolForValue && operator !== '';
    if(value === 'AC'){
        decimalOne = '';
        decimalTwo = '';
        valueOne = '';
        valueTwo = '';
        result = '';
        operator = '';
        display.textContent = '';
    } else if (value==='back'){
        display.textContent = display.textContent.substring(0, display.textContent.length-1);
    } else if (value === '.'){
        let spreadingArr = [...display.textContent];
        if(!spreadingArr.includes('.')){
            display.textContent+=value;
        }
    } else if(boolForNumberValue && !boolForDisplay){
        display.textContent += value;
    } else if(boolForNumberValue && boolForDisplay && valueOne !== ''){
        if(boolForDisplay){
            operator = display.textContent;
            display.textContent = value;
        } else {
            display.textContent += value;
        }
    } else if(boolForValue && boolForDisplay){
        display.textContent = value;
    } else if(boolForValue && valueOne==='') {
        if(display.textContent.includes('.')){
            let prepareValue = display.textContent.split(".")[1];
            decimalOne = prepareValue.length;
            console.log(decimalOne);
        }
        valueOne = Number(display.textContent);
        display.textContent = value;
    } else if ((value==='='||boolidek)){
        if(value==='='&&operator===''){
            console.log('Dont touch me if you arent done!');
        } else {
            if(display.textContent.includes('.')){
                let prepareValue = display.textContent.split(".")[1];
                decimalTwo = prepareValue.length;
                console.log(decimalTwo);
            }
            valueTwo = Number(display.textContent);
            if(decimalOne!==''||decimalTwo!==''){
                if(decimalOne>decimalTwo){
                    valueOne = valueOne*10**decimalOne;
                    valueTwo = valueTwo*10**decimalOne;
                    result = operate(valueOne, valueTwo, operator)/10**decimalOne;
                } else {
                    valueOne = valueOne*10**decimalTwo;
                    valueTwo = valueTwo*10**decimalTwo;
                    result = operate(valueOne, valueTwo, operator)/10**decimalTwo;
                    console.log(valueOne)
                    console.log(valueTwo)
                }
            } else {
                console.log(`${valueOne} . ${operator} . ${valueTwo}`);
                result = operate(valueOne, valueTwo, operator);
            }
            display.textContent = result;
            valueOne = result;
            valueTwo = '';
            operator = '';
        }
    } else if (boolForValue && valueOne !==''){
        display.textContent=value;
    }

}


