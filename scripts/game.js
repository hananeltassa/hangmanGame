// this file will contain the games logic 


// we start by defining the possible words
const words = ['liverpool', 'mancity', 'youtube', 'bootcamp', 'javascript']

// we will store the word that the player will have to guess
let selectedWord = '';

let correctGuesses = []

function initGame(){
    //selecting random word
    selectedWord = getRandomWord();
    console.log(selectedWord)

}

function getRandomWord(){
    const word = words[Math.floor(Math.random() * words.length)];  //math.floor => rounds to int 
    return word
}



initGame(); // starting the game
