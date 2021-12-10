let myLeads = []; //Empty Array to store links
let savedLeads = [];

const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");
const delBtn = document.getElementById("del-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"));//JSON.parse to get as array bcz local storage stores as string
const tabBtn = document.getElementById("tab-btn");


delBtn.addEventListener("dblclick", delDataFromLocalStorage);
saveBtn.addEventListener("click", saveToLead);
tabBtn.addEventListener("click", tabClick);


if(leadsFromLocalStorage!=null){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
    let listItems = "";

    for(let i = 0; i < leads.length; i++){
        //DOM Manipulation is costly so we will add our items in listItems string and after loop is over use innerHTML to parse it.
        listItems += "<li>" + `<a href = ${"https:\\"+leads[i]} target = "_blank">` + leads[i] + "</a>" + "</li>";
        savedLeads.push(leads[i]);    
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
    
    myLeads = [];

}

function saveToLead(){
    let leads = inputEl.value;
    // console.log(leads);
    myLeads.push(leads);
    inputEl.value = "";      
    render(myLeads);
    //Pushing array myLeads into local storage
    localStorage.setItem("leads",JSON.stringify(savedLeads)); 
}

function delDataFromLocalStorage(){
    localStorage.clear();
    myLeads = [];
    savedLeads = [];
    render(myLeads);
    console.log("Double clicked");
    location.reload(); //Reloads the page automatically
}

function tabClick(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);    
        render(myLeads);
        localStorage.setItem("leads", JSON.stringify(savedLeads));   
     });   
    
}

