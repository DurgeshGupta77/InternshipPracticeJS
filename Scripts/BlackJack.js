//Creating an Array to store our cards
let cardsArray = [];

let sum = 0;

let hasBlackJack = false;

let isAlive = false;

let message = "";

let player = {
    name : "Durgesh",
    chips : 145
}

//Getting the player-el from HTML
let playerEl = document.getElementById("player-el");

//Setting playerEl with description of player
playerEl.textContent = player.name + ": " + player["chips"] + "$"; 

//Getting the button from HTML
let clickBtn = document.getElementById("clickBtn");

//Getting messageEl from HTML
let messageEl = document.getElementById("message-el");

//Getting sum-el from HTML
let sumEl = document.getElementById("sum-el");

//Getting cards-el from HTML
let cardsEl = document.getElementById("cards-el");

//Adding Event Listener to the button
clickBtn.addEventListener("click", startGame);

//Getting draw-card button from HTML
let drawCard = document.getElementById("draw-card");

//Adding Event Listener to drawCard
drawCard.addEventListener("click", redrawCard);


//Creating a function getRandomCard()
function getRandomCard(){
    //In Black Jack Game J Q and K has the value of 10 and A has value of either 1 or 11. We will choose A's value to be 11
    let randomNumber = Math.floor(Math.random() * 13) + 1; //generate a random number from 1 to 13
    if(randomNumber === 1){
        return 11;
    }
    else if(randomNumber === 11 || randomNumber === 12 || randomNumber === 13){
        return 10;
    }
    else{
        return randomNumber;
    } 
}

//Creating the function startGame() which calls renderGame()
function startGame(){
    isAlive = true;
    //Setting firstCard and secondCard value to the value returned by function getRandomCard()
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cardsArray.push(firstCard,secondCard);
    renderGame();
}

function renderGame(){
    //In Black Jack we want 2 cards with sum of exactly 21 or as close to 21 as possible but never above 21
    if(sum<=20){
        message = "Do you wish to draw a new card?";
    }
    else if(sum === 21){
        hasBlackJack = true;
        message = "Wohoo! You have got a black jack";
    }
    else{
        isAlive = false;
        message = "You are out of the game!";
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: "+sum;
    for(let i = 0; i<cardsArray.length; i++){
        cardsEl.textContent += cardsArray[i] + " , ";
    }
    
    //Disabling the button so that it can't be clicked again
    clickBtn.disabled = true;
}

function redrawCard(){
    if(isAlive === true && hasBlackJack!==true){      

        //Setting cards value to the value returned by function getRandomCard()
        let cards = getRandomCard();

        sum+=cards;
        
        cardsArray.push(cards);

        cardsEl.textContent = "Cards: ";

        renderGame();
    }
}


