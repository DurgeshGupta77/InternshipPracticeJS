let firstCard = Math.floor(Math.random() * 10)+2;
let secondCard = Math.floor(Math.random() * 10)+2;

let sum = firstCard + secondCard;
let hasBlackJack = false;

let isAlive = true;

let message = "";

//In Black Jack we want 2 cards with sum of exactly 21 or as close to 21 as possible but never above 21
if(sum<=20){
    // console.log("Do you wish to draw a new card?");
    message = "Do you wish to draw a new card?";
}
else if(sum === 21){
    // console.log("Wohoo! You have got a black jack");
    hasBlackJack = true;
    message = "Wohoo! You have got a black jack";
}
else{
    // console.log("You are out of the game!");
    isAlive = false;
    message = "You are out of the game!";
}

console.log(message);