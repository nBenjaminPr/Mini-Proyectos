const cards = document.querySelector(".card")

let matched = 0
let cardOne, cardTwo;
let disableDeck = false;

function flipCard ({target: clickedCard}) {

    if (cardOne !== clickedCard && !disableDeck){
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard
        }

        cardTwo = clickedCard;
        disableDeck = true
        let cardOneIgm = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneIgm, cardTwoImg)
    }

}