let firstcard = get();
let secondcard = get();
let cards = [firstcard , secondcard];
let sum = firstcard + secondcard;
let hasblackjack = false 
let isalive = true
let message = ""
let messageEl = document.getElementById("msg");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");
 
function startgame(){
    sumEl.textContent = "Sum: " + sum; 
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += `${cards[i]} `; 
    }
    if (sum <= 20){
        message = "Do you want to draw a new card";
    }
    else if (sum === 21){
        message = "Congo! You got BLACKJACK";
    }
    else if (sum > 21){
        message = "You are out of game";
        isalive = false;
    }
    messageEl.textContent = message;
}    
function newcard(){
    if(isalive === true && hasblackjack === false){
    let thirdcard = get();
    sum += thirdcard;
    cards.push(thirdcard)
    startgame()
    }
}

function get(){
    let randomNumber = Math.floor(Math.random()* 13) + 1;
    if(randomNumber > 10){
        return 10;
    }
    else if (randomNumber === 1){
        return 11;
    }
    else {
        return randomNumber;
    }
}