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

// TEST BUTTON CLICK EVENT
fearButton.addEventListener("click", function(){increaseBar(fearDamageBar);});

// INCREASE A BAR
function increaseBar(bar) {
    let newClass = "bar" + String(parseInt(bar.classList[1].charAt(3)) + 1);

    bar.classList.remove("bar0", "bar1", "bar2", "bar3", "bar4", "bar5", "bar6", "bar7", "bar8", "bar9");
    bar.classList.add(newClass);
};