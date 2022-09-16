let num1 = document.getElementById('num1-el');
let num2 = document.getElementById('num2-el');


let sumEl = document.getElementById('sum-el');

function add() {
    x = parseInt(num1.value)
    y = parseInt(num2.value)
    let sum = x + y
    sumEl.textContent = sum
}

function subtract() {
    sumEl.textContent = num1.value - num2.value
}

function divide() {
    sumEl.textContent = num1.value / num2.value
}

function multiply() {
    sumEl.textContent = num1.value * num2.value
}