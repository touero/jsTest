let number1 = +prompt('number1: ');
let operator = prompt('operator: ');
let number2 = +prompt('number2: ');
let operatorShow = (operator === '/') ? '÷' : operator;
const operators = ['+', '-', '*', '/'];

if (!operators.includes(operator)){
    alert('Error: Operator is illegal')
    throw new Error('Error: Operator is illegal')
}else if (!(number1 && number2 && operator)){
    alert('Error: null')
    throw new Error('Error: null')
}

function addition(number1, number2){
  return number1 + number2;
}

function subtraction(number1, number2){
  return number1 - number2;
}

function multiplication(number1, number2){
  return number1 * number2;
}

function division(number1, number2){
  if (number2 === 0){
    alert('Error: 0 cannot be used as the dividend')
    throw new Error('Error: 0 cannot be used as the dividend')
  }
  return number1 / number2;
}


function write_to_html(result){
  document.write(`${number1} ${operatorShow} ${number2} = ${result}`);
}

let result = 0;
switch(operator){
  case '+':
    result = addition(number1, number2);
    break;
  case '-':
    result = subtraction(number1, number2);
    break;
  case '*':
    result = multiplication(number1, number2);
    break;
  case '/':
    result = division(number1, number2);
    break;
}
write_to_html(result)