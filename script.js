const firstCard = { name: "card first-card" };
const rightCard = { name: "card right-card" };
const leftCard = { name: "card left-card" };
const backCard = { name: "card back-card" };

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

function getNextLeft(currentName) {
  switch (currentName) {
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

function getNextRight(currentName) {
  switch (currentName) {
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
function getBack(currentName) {
  switch (
    currentName /* Va falloir m'expliquer pourquoi mettre un default si ça fait tout péter */
  ) {
    case backCard.name:
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
function onClickDiv(currentDiv) {
  move(currentDiv);
}
function onClickH1(currentDiv){
  if (currentDiv.parentNode.className.split(" ")[2] === "selected"){
  unexpand(currentDiv);
  }
  else {
  expand(currentDiv);
  }
}
function expand(currentDiv) {
  if (currentDiv.parentNode.className === firstCard.name) {
    currentDiv.parentNode.className = currentDiv.parentNode.className + " selected";
  }
}
function unexpand(currentDiv) {
  if (currentDiv.parentNode.className === firstCard.name + " selected") {
    currentDiv.parentNode.className = firstCard.name;
  }
}
function move(currentDiv) {
  if (currentDiv.className === leftCard.name) {
    moveRight();
  } else if (currentDiv.className === rightCard.name) {
    moveLeft();
  } else if (currentDiv.className === backCard.name) {
    moveBack();
  }
}

function initAccordion(){

  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) { // accordéon dérobé
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
  
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}


window.onload = init;

function init() {
  initAccordion();
  particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 500 } },
      color: { value: "#8c8c8c" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 3 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 5,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#8c8c8c",
        opacity: 0.4,
        width: 1.8,
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "bubble" },
        onclick: { enable: false, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 7, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
}
