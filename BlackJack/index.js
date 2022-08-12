let firstCard = 10
let secondCard = 4
let cards=[ firstCard,secondCard] //ordered list arrays complex data type
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl= document.getElementById("sum-el");
let cardEl= document.getElementById("card-el");
//let sumEl = document.querySelector("#sum-el") for advance javascript and can apply the css

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: " +cards[0]+" "+cards[1];
}
function newCard(){
    let card=7;
    sum+=card;
    cards.push(sum);
    console.log(cards)
    renderGame();

}

function startGame(){
    renderGame();
}
