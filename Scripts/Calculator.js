//Declaring two variable
let num = 8;
let secondNum = 2;

//getting numbers span from HTML
let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");

//getting buttons from HTML
let addBtn = document.getElementById("add-btn");
let subtractBtn = document.getElementById("subtract-btn");
let multiplyBtn = document.getElementById("multiply-btn");
let divideBtn = document.getElementById("divide-btn");

//getting sum span from HTML
let sumEl = document.getElementById("sum-el");

//Setting numbers span with actual numbers
num1.textContent = num;
num2.textContent = secondNum;

//adding Event Listener to each button
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

//creating function for each task
function add(){
    let sum = num + secondNum;
    sumEl.textContent = "Sum: "+ sum;
}

function subtract(){
    let difference = num - secondNum;
    sumEl.textContent = "Difference: "+ difference;
}

function multiply(){
    let multiply = num * secondNum;
    sumEl.textContent = "Product: "+multiply;
}

function divide(){
    let divide = num/secondNum;
    sumEl.textContent = "Division: "+divide;
}




