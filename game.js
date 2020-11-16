// DOM ELEMENTS

// SCREENS
const titleDOM = document.getElementById("title");
const infoDOM = document.getElementById("info");
const battleDOM = document.getElementById("battle");
const winDOM = document.getElementById("win");
const loseDOM = document.getElementById("lose");

// BARS
const fearBarDOM = document.getElementById("fear-bar");
const greedBarDOM = document.getElementById("greed-bar");
const angerBarDOM = document.getElementById("anger-bar");

// BUTTONS
const playButtonTitleDOM = document.getElementById("play-button-title");
const playButtonInfoDOM = document.getElementById("play-button-info");

const fearButtonDOM = document.getElementById("fear-button");
const greedButtonDOM = document.getElementById("greed-button");
const angerButtonDOM = document.getElementById("anger-button");

const playButtonWinDOM = document.getElementById("play-button-win");
const playButtonLoseDOM = document.getElementById("play-button-lose");

//------------------------------------------------------------------

// VARIABLES

// BAR STATUSES
let fearStatus = 5;
let greedStatus = 5;
let angerStatus = 5;

// CHOICES
let playerChoice = 0;
let demonChoice = 0;

//------------------------------------------------------------------

// BUTTON CLICK EVENTS

playButtonTitleDOM.addEventListener("click", function(){
    titleDOM.style.display = "none";
    infoDOM.style.display = "unset";
});

playButtonInfoDOM.addEventListener("click", function(){
    battleSetup();
});

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

playButtonWinDOM.addEventListener("click", function(){
    battleSetup();
});

playButtonLoseDOM.addEventListener("click", function(){
    battleSetup();
});

//------------------------------------------------------------------

// BATTLE SETUP
function battleSetup(){
    infoDOM.style.display = "none";
    winDOM.style.display = "none";
    loseDOM.style.display = "none";
    fearBarDOM.style.backgroundColor = "yellow";
    fearBarDOM.style.height = "50%";
    fearStatus = 5;
    greedBarDOM.style.backgroundColor = "yellow";
    greedBarDOM.style.height = "50%";
    greedStatus = 5;
    angerBarDOM.style.backgroundColor = "yellow";
    angerBarDOM.style.height = "50%";
    angerStatus = 5;
    battleDOM.style.display = "unset";
};

//------------------------------------------------------------------

// BATTLE FUNCTIONS

// RUN ROUND
function runRound(){
    demonRoll();
    if (resolve()){
        right();
    } else {
        wrong();
    }
    if(checkWin()){
        runWin();
    }
    if(checkLose()){
        runLose();
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
    barColor(bar, status);
};

// DECREASE A BAR
function decreaseBar(bar, status) {
    bar.style.height = String(status * 10) + "%";
    barColor(bar, status);
};

// CHANGE BAR COLOR
function barColor(bar, status){
    if(status <= 3){
        bar.style.backgroundColor = "red";
    } else if(status >= 7){
        bar.style.backgroundColor = "limegreen";
    } else {
        bar.style.backgroundColor = "yellow";
    }
};

// CHECK FOR WIN
function checkWin(){
    if(fearStatus == 0 && greedStatus == 0 && angerStatus == 0){
        return true;
    }
    return false;
};

// CHECK FOR LOSE
function checkLose(){
    if(fearStatus == 10 && greedStatus == 10 && angerStatus == 10){
        return true;
    }
    return false;
};

// RUN WIN
function runWin(){
    battleDOM.style.display = "none";
    winDOM.style.display = "unset";
};

// RUN LOSE
function runLose(){
    battleDOM.style.display = "none";
    loseDOM.style.display = "unset";
};