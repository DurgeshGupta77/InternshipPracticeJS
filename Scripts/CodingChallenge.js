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

let welcomeEl = document.getElementById("welcome-el");

let names = "Durgesh";

let greetings = "Hello fellow Earthlings! Welcome to my Page. Your name shall be ";

welcomeEl.innerText = greetings + names;

// console.log(greetingText);

welcomeEl.innerText = welcomeEl.innerText + "✌️";