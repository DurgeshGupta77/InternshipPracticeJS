const saveBtn = document.getElementById("save-btn");

let myLeads = []; //Empty Array to store links

const inputEl = document.getElementById("input-el");

saveBtn.addEventListener("click", saveToLead);

function saveToLead(){
    let leads = inputEl.value;
    myLeads.push(leads);
    console.log(myLeads);
}