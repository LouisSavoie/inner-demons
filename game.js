// DOM ELEMENTS

// BARS
const fearBarDOM = document.getElementById("fear-bar");
const greedBarDOM = document.getElementById("greed-bar");
const angerBarDOM = document.getElementById("anger-bar");

// BUTTONS
const fearButtonDOM = document.getElementById("fear-button");
const greedButtonDOM = document.getElementById("greed-button");
const angerButtonDOM = document.getElementById("anger-button");

// VARIABLES

// BAR STATUSES
let fearStatus = 5;
let greedStatus = 5;
let angerStatus = 5;

// CHOICES
let playerChoice = 0;
let demonChoice = 0;

// BARS SETUP
function setup(){
    fearBarDOM.style.height = "50%";
    greedBarDOM.style.height = "50%";
    angerBarDOM.style.height = "50%";
};

setup();

// BUTTON CLICK EVENTS
fearButtonDOM.addEventListener("click", function(){
    playerChoice = 0;
    runRound();
});

greedButtonDOM.addEventListener("click", function(){
    playerChoice = 1;
    runRound();
});

angerButtonDOM.addEventListener("click", function(){
    playerChoice = 2;
    runRound();
});

// RUN ROUND
function runRound(){
    demonRoll();
    let result = resolve();
    if (result){
        right();
    } else {
        wrong();
    }
};

// DEMON ROLL
function demonRoll(){
    demonChoice = Math.floor(Math.random() * 3);
};

// RESOLVE
function resolve(){
    if(playerChoice == demonChoice){
        return true;
    }
    return false;
};

// RIGHT
function right(){
    if(playerChoice == 0 && fearStatus >= 1){
        fearStatus--;
        decreaseBar(fearBarDOM, fearStatus);
    } else if(playerChoice == 1 && fearStatus >= 1){
        greedStatus--;
        decreaseBar(greedBarDOM, greedStatus);
    } else if(playerChoice == 2 && angerStatus >= 1){
        angerStatus--;
        decreaseBar(angerBarDOM, angerStatus);
    }
};

// WRONG
function wrong(){
    if(demonChoice == 0 && fearStatus <= 9){
        fearStatus++;
        increaseBar(fearBarDOM, fearStatus);
    } else if(demonChoice == 1 && greedStatus <= 9){
        greedStatus++;
        increaseBar(greedBarDOM, greedStatus);
    } else if(demonChoice == 2 && angerStatus <= 9){
        angerStatus++;
        increaseBar(angerBarDOM, angerStatus);
    }
};

// INCREASE A BAR
function increaseBar(bar, status) {
    bar.style.height = String(status * 10) + "%";
};

// DECREASE A BAR
function decreaseBar(bar, status) {
    bar.style.height = String(status * 10) + "%";
};