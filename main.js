// B
alert(" section B ");
let x = +prompt("choose number X");
let y = +prompt("choose number Y");
let z = +prompt("choose number Z");
let res = "arithmetic mean - " + (x + y + z) / 3;
alert(res);


// A
alert("section A ")
let
    log = prompt("What is your name ? "),
    age = +prompt("How old are you ? ");

const number1 = Math.floor(Math.random() * 1000) + 1;
const number2 = Math.floor(Math.random() * 100) + 1;

const operators = ['+', '-', '*', '/', '%', ];

const randomOperator = operators[Math.floor(Math.random() * operators.length)];

let result;

switch (randomOperator) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        result = number1 / number2;
        break;
    case '%':
        result = number1 % number2;
        break;
    default:
        console.log('Invalid operator');
}
let ans = +prompt(`${number1} ${randomOperator} ${number2} = ?`)
if (ans === result) {
    alert("Congrats ! you answered the question correctly " + "(" + ans + ")");
} else {
    alert("Oops, сorrect answer " + result + " Your answer to the question was - " + ans)
}

console.log(`Results: ${log} (${age} y.o) answered - ${ans}`);
console.log('the correct answer was ' + result);