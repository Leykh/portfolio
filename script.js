const leftCard = "card left-card";
const rightCard = "card right-card";
const firstCard = "card first-card";
const backCard = "card back-card";

function moveLeft() {
    cards = document.getElementsByClassName("card");
    Array.from(cards).forEach((card) => {
        card.className = getNextLeft(card.className);
    });
}

function moveRight() {
    cards = document.getElementsByClassName("card");
    Array.from(cards).forEach((card) => {
        card.className = getNextRight(card.className);
    });
}

function getNextLeft(currentName){
    switch (currentName){
        case firstCard:
            return leftCard;
        case leftCard:
            return backCard;
        case rightCard:
            return firstCard;
        case backCard:
            return rightCard;
    }
}

function getNextRight(currentName){
    switch (currentName){
        case firstCard:
            return rightCard;
        case rightCard:
            return backCard;
        case backCard:
            return leftCard;
        case leftCard:
            return firstCard;
        default:
            return null;
    }
}
function onClickDiv(currentDiv){
    expand(currentDiv);
    move(currentDiv);
}
function expand(currentDiv){
    if (currentDiv.className === firstCard + " selected"){
        currentDiv.className = firstCard;
    }
    else if (currentDiv.className === firstCard){
        currentDiv.className = currentDiv.className + " selected";
    }
}
function move(currentDiv){
    if (currentDiv.className === leftCard){
        moveRight();
    }
    else if (currentDiv.className === rightCard){
        moveLeft();
    }
}