//Passenger Counter

//Coding Practices

// let count = 0;

// let myAge = 22;
// console.log(myAge);

// let myDogRatio = 7;

// let myDogAge = myAge * myDogRatio;

// console.log(myDogAge);

// let codingChallenge;

// codingChallenge = 50;
// console.log(codingChallenge);

// codingChallenge += 50;
// console.log(codingChallenge);

// codingChallenge -=75;
// console.log(codingChallenge);

// codingChallenge +=45;
// console.log(codingChallenge);

// function displayNumber(){
//     console.log(42);
// }

// displayNumber();

// let lap1 = 42;
// let lap2 = 35;
// let lap3 = 30;

// function lapLogger(){
//     console.log(lap1+lap2+lap3);
// }

// lapLogger();

// let userName = "Durgesh";

// let message = "You have three new notifications";

// let messageToUser = message + ", " + userName + "!";
// console.log(messageToUser);

// let names = "Durgesh";

// let greetings = "Hi! My name is ";

// let myGreetings = greetings + names;

// console.log(myGreetings);

// console.log(4 + 5); //9
// console.log("2" + "4"); //"24"
// console.log("5" + 1); //"51"
// console.log(100 + "100"); //"100100"

// let welcomeEl = document.getElementById("welcome-el");

// let names = "Durgesh";

// let greetings = "Hello fellow Earthlings! Welcome to my Page. Your name shall be ";

// welcomeEl.innerText = greetings + names;

// // console.log(greetingText);

// welcomeEl.innerText = welcomeEl.innerText + "✌️";

// let firstName = "Durgesh";
// let lastName = "Gupta";
// let middleName = "Prasad";

// let fullName = firstName + " " + middleName + " " +lastName

// console.log(fullName);

// function displayMessage(){
//     let firstName = "Linda";
//     let greetings = "Hi there";

//     console.log(greetings + " , " + firstName + "!")
// }

// displayMessage();

// let myPoints = 3;

// function add3Points(){
//     myPoints+=3;
// }

// function remove1Points(){
//     myPoints-=1;
// }

// add3Points();
// add3Points();
// add3Points();
// remove1Points();
// remove1Points();

// //We have to get myPoints to 10
// console.log(myPoints);

// let age = 92;

// if(age>100){
//     console.log("Not Eligible you have already gotten a card from the King the almighty Durgesh");
// }
// else if(age === 100){
//     console.log("Here's your greeting card from the King the almighty Durgesh");
// }
// else{
//     console.log("No you can't have the card because you do not fulfill the requirement");
// }

// let myArr = [
//     'Former Computer Science Teacher at KKSS',
//     'Working in Yarsha Studio or Fintech Nepal Pvt.Ltd. since Nov 19,2021',
//     'Completed SLC from Kumudini Kunj Secondary School',
//     'Completed Plus 2 degree in Management from Kumudini Kunj Secondary School',
//     'Completer BSc.(Hons.) degree in Computer Science from University of Wolverhampton',
//     'Graphic Designing Certification from PIT Institution'
// ];

// for(let i = 0; i < myArr.length; i++){
//     console.log(myArr[i]);
// }

// let myArr = ["Durgesh Prasad Gupta", 22, true];

// let messages = [
//     "Hey, How's it going",
//     "I'm great thanks. How about you?",
//     "All good! Lately working on my Portfolio"
// ];

// let newMessage = "Same here! Workoholic af!";

// messages.push(newMessage);
// console.log(messages);

// messages.pop();
// console.log(messages);

// for(let i = 10; i <= 100; i+=10){
//     console.log(i);
// }

// let cards = [7,3,9];

// for(let i = 0; i < cards.length; i++){
//     console.log(cards[i]);
// }

// let welcomeEl = document.getElementById("welcome-el");

// let sentence = ["Hello", "my", "name", "is", "Durgesh"];

// for(let i = 0; i<sentence.length; i++){
//     welcomeEl.textContent += " " + sentence[i];
// }

// let player1Time = 102;
// let player2Time = 107;

// function totalRaceTime(){
//     let sum = player1Time + player2Time;
//     return sum;
// }

// let raceTime = totalRaceTime();

// console.log(raceTime);

// let randomNumber = Math.floor(Math.random() * 6); //Gives random number from 0 to 5

// let newRandomNumber = rollDice();

// function rollDice(){
//     return Math.floor(Math.random() * 6) + 1; //Gives random number from 1 to 5
// }

// console.log(newRandomNumber);

let airbnbListings = {
    "Name" : "The Half Blood Dragon's Castle",
    "Availability" : true,
    "Price" : 150,
    "Tags" : ["Castle", "Britain", "15th Century"],
    "sayHello" : function (){
        console.log("Hello calling from inside object");
    }
};

console.log(airbnbListings.Name);
console.log(airbnbListings.Tags[0]);
console.log(airbnbListings.Price);
airbnbListings.sayHello();

let person = {
    "name" : "Durgesh Prasad Gupta",
    "age" : 22,
    "country" : "Nepal"
};

function logData(){
    return person.name + " is " + person.age + " years old " + "and lives in " + person.country;
}

console.log(logData());

let age = 15;

if(age<=6){
    console.log("Free to ride");
}
else if(age>6 && age <= 17){
    console.log("Child Discount");
}
else if(age >=18 && age <=26){
    console.log("Student Discount");
}
else if(age>=27 && age<=66){
    console.log("Full Price");
}
else{
    console.log("Senior Citizen Discount");
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
console.log("The "+largeCountries.length+" largest countries in the world:");
for(let i = 0; i < largeCountries.length; i++){
    console.log(largeCountries[i]);
}

let messedUpLargeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
messedUpLargeCountries.pop();
messedUpLargeCountries.shift();
messedUpLargeCountries.unshift("China");
messedUpLargeCountries.push("Pakistan");
console.log(messedUpLargeCountries);

let dayOfMonth = 13;
let weekDay = "Friday";

if(dayOfMonth === 13 && weekDay === "Friday"){
    console.log("🦇");
}

let hands = ["Rock", "Paper", "Scissor"];

function returnRandomItemsFromArray(){
    let randomNumber = Math.floor(Math.random() * 4);

    return hands[randomNumber];
}

console.log(returnRandomItemsFromArray());


let fruits = ["🍎", "🍊", "🍊", "🍊", "🍎", "🍊", "🍎"];

let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

//Create a function that puts apple into appleShelf and orange into orangeShelf
function sortFruits(){
    for(let i = 0; i < fruits.length; i++){
        if(fruits[i] === "🍎"){
            appleShelf.textContent+=fruits[i];
        }
        else{
            orangeShelf.textContent+=fruits[i];
        }
    }
}

sortFruits();

let box = document.getElementById("box");

box.addEventListener("click", function(){
    console.log("The box was clicked");
});

let buyBtn = document.getElementById("buy-btn");

buyBtn.innerHTML = "<button>" + "Buy the Item!" +"</button>" + "<br>"

buyBtn.addEventListener("click", renderParagraph);

function renderParagraph(){
    buyBtn.innerHTML += "<p>" + "Thank you for buying our product" + "</p>";
}

const recipients = "Uzumaki";
const sender = "Durgesh"

const email = "Hey " + recipients + "! How is it going! Cheers!";

const temEmail = `Hey ${recipients}! How is it going! Cheers ${sender}!`;

console.log(email);
console.log(temEmail);

localStorage.setItem("Durgesh","isgreat");
console.log(localStorage.getItem("Durgesh"));
localStorage.clear();