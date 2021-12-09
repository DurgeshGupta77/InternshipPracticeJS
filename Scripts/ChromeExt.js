let myLeads = []; //Empty Array to store links
let savedLeads = [];

const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");

saveBtn.addEventListener("click", saveToLead);

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"));
console.log(leadsFromLocalStorage);

function saveToLead(){
    let leads = inputEl.value;
    console.log(leads);
    myLeads.push(leads);
    inputEl.value = "";      
    renderLeads();
    //Pushing array myLeads into local storage
    localStorage.setItem("leads",JSON.stringify(savedLeads)); 
}

function renderLeads(){
    let listItems = "";

    for(let i = 0; i < myLeads.length; i++){
        //DOM Manipulation is costly so we will add our items in listItems string and after loop is over use innerHTML to parse it.
        listItems += "<li>" + `<a href = ${"https:\\"+myLeads[i]} target = "_blank">` + myLeads[i] + "</a>" + "</li>";
        savedLeads.push(myLeads[i]);    
    }

    ulEl.innerHTML += listItems //InnerHTML parses <li> and </li> as HTML content rather than String
    

    //There is an alternative way to InnerHTMl
    // ulEl.innerHTML += "<h1>" + "Alternative way of doing it" + "</h1>";
    // for(let i = 0; i < myLeads.length; i++){    
    //     //First we create element
    //     const li = document.createElement("li");
    //     //Then we add content to the element
    //     li.textContent = myLeads[i];
    //     //Then we append the li to our ulEl
    //     ulEl.append(li);    
    // }

    // localStorage.setItem("leads",JSON.stringify(myLeads));
    // console.log(savedLeads);
    myLeads = [];

}
