const firstCard = {name:"card first-card"};
const rightCard = {name:"card right-card"};
const leftCard = {name:"card left-card"};
const backCard = {name:"card back-card"};
isExpanding = false;

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

function moveBack() {
    cards = document.getElementsByClassName("card");
    Array.from(cards).forEach((card) => {
        card.className = getBack(card.className);
    });
}

function getNextLeft(currentName){
    switch (currentName){
        case firstCard.name:
            return leftCard.name;
        case leftCard.name:
            return backCard.name;
        case rightCard.name:
            return firstCard.name;
        case backCard.name:
            return rightCard.name;
    }
}

function getNextRight(currentName){
    switch (currentName){
        case firstCard.name:
            return rightCard.name;
        case rightCard.name:
            return backCard.name;
        case backCard.name:
            return leftCard.name;
        case leftCard.name:
            return firstCard.name;
        default:
            return null;
    }
}
function getBack(currentName){
    switch (currentName){ /* Va falloir m'expliquer pourquoi mettre un default si ça fait tout péter */
        case backCard:
            return firstCard.name;
        case firstCard.name:
            return backCard.name;
        case rightCard.name:
            return rightCard.name;
        case leftCard.name:
            return leftCard.name;
        default:
            return null;
    }
}
function onClickDiv(currentDiv){
    expand(currentDiv);
    move(currentDiv);
}
function expand(currentDiv){
    if (currentDiv.className === firstCard.name && !isExpanding){
        currentDiv.className = currentDiv.className + " selected";
    }
    isExpanding = false;
}
function unexpand(currentDiv){
    if (currentDiv.parentNode.className === firstCard.name + " selected"){
        isExpanding = true;
        currentDiv.parentNode.className = firstCard.name;
    }
}
function move(currentDiv){
    if (currentDiv.className === leftCard.name){
        moveRight();
    }
    else if (currentDiv.className === rightCard.name){
        moveLeft();
    }
    else if (currentDiv.className === backCard.name){
        moveBack();
    }
}