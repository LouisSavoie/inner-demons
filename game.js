// METERS AND BARS
const fearDamageMeter = document.getElementById("fear-damage-meter");
const fearDamageBar = document.getElementById("fear-damage-bar");

const fearGripMeter = document.getElementById("fear-grip-meter");
const fearGripBar = document.getElementById("fear-grip-bar");

const greedDamageMeter = document.getElementById("greed-damage-meter");
const greedDamageBar = document.getElementById("greed-damage-bar");

const greedGripMeter = document.getElementById("greed-grip-meter");
const greedGripBar = document.getElementById("greed-grip-bar");

const angerDamageMeter = document.getElementById("anger-damage-meter");
const angerDamageBar = document.getElementById("anger-damage-bar");

const angerGripMeter = document.getElementById("anger-grip-meter");
const angerGripBar = document.getElementById("anger-grip-bar");

// BUTTONS
const fearButton = document.getElementById("fear-button");
const greedButton = document.getElementById("greed-button");
const angerButton = document.getElementById("anger-button");

// CHOICES
let playerChoice = 0;
let demonChoice = 0;

// BUTTON CLICK EVENTS
fearButton.addEventListener("click", function(){
    playerChoice = 0;
    runRound();
});

greedButton.addEventListener("click", function(){
    playerChoice = 1;
    runRound();
});

angerButton.addEventListener("click", function(){
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
    if(playerChoice == 0){
        increaseBar(fearDamageBar);
    } else if(playerChoice == 1){
        increaseBar(greedDamageBar);
    } else {
        increaseBar(angerDamageBar);
    }
};

// WRONG
function wrong(){
    if(demonChoice == 0){
        increaseBar(fearGripBar);
    } else if(demonChoice == 1){
        increaseBar(greedGripBar);
    } else {
        increaseBar(angerGripBar);
    }
};

// INCREASE A BAR
function increaseBar(bar) {
    let newClass = "bar" + String(parseInt(bar.classList[1].charAt(3)) + 1);

    bar.classList.remove("bar0", "bar1", "bar2", "bar3", "bar4", "bar5", "bar6", "bar7", "bar8", "bar9");
    bar.classList.add(newClass);
};