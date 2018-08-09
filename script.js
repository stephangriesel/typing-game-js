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
    console.log('init');
}