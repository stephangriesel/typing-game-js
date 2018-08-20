window.addEventListener('load', init);

// Global Variables

let time = 10;
let score = 0;
let activeUser;

// DOM elements

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'normal',
    'address',
    'computer'
];

// Start Challenge

function init() {
    // Choose word from array
     displayWord(words);
     // Input compare 
     wordInput.addEventListener('input', compareWord);
     // Countdown
     setInterval(countdown, 1000);
     // Is game running?
     setInterval(gameRunning, 1000);
}

// Compare Word 
function compareWord() {
    if(wordCompare()) {
        console.log("TEST");
    }
}

// Input  & Word compare 
function wordCompare() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "You got it";
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
}

// Random word
function displayWord(words) {
    // Random Array index
    const randomWord = Math.floor(Math.random() * words.length);
    // Random word output
    currentWord.innerHTML = words[randomWord];
}

// Countdown 
function countdown() {
    // Infinite time
    if(time > 0) {
         // Decrease
         time--;
    } else if (time === 0){
        // Game over
        isPlaying = false;
    }

    // Time display 
    timeDisplay.innerHTML = time;
}

// Is game running?
function gameRunning() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'You have run out of time!';
    }
};