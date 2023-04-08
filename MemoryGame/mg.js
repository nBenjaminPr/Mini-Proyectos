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

function matchCards (img1, img2) {
    if(img1 === img2){
        matched++;
        if(matched == 8){
            setTimeout(() => {
                return shuffleCard()
            }, 1000);
        }

        cardOne.removeEventListener("click", flipCard)
        cardTwo.removeEventListener("click", flipCard)
        cardOne = cardTwo = "";
        return disableDeck = false
    }

    setTimeout(() => {
        cardOne.classList.add("shake")
        cardTwo.classList.add("shake")
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}