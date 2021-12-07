//Actual Coding
//Initializing the count variable with 0
let count = 0;

//Getting the h2 from HTML
let countEl = document.getElementById("count-el");


//Getting the increment button from HTML
var btnClick = document.getElementById("increment-btn");

//Getting the save button from HTMl
let saveBtn = document.getElementById("save-btn");

//Getting the element p from HTML
let savedInfo = document.getElementById("saved-info");

//Adding Event Listener in the button
btnClick.addEventListener("click", increaseCount);

//Adding Event Listener to Save button
saveBtn.addEventListener("click", save);

//Creating the function 
function increaseCount(){
    count+=1;
    countEl.innerText = count;
}

function save(){
    let separator = count+ " - ";
    // savedInfo.innerText= savedInfo.innerText + separator;
    //The innertext erases the space provided in p and separator so use textcontent
    savedInfo.textContent += separator;

    //Resetting the countEl to 0
    count = 0;
    countEl.textContent = count;
}
