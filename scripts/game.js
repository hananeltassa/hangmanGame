// this file will contain the games logic 


// we start by defining the possible words
const words = ['liverpool', 'mancity', 'youtube', 'bootcamp', 'javascript']

// we will store the word that the player will have to guess

let selectedWord = '';
let correctGuesses = []
let incorrectGuesses = 0; 
const maxIncorrectGuesses = 6;


function initGame(){
    //selecting random word
    selectedWord = getRandomWord();
    console.log(selectedWord)

    //showing the corrected gueses
    correctGuesses = Array(selectedWord.length).fill('_'); 

    answers();
    setupLetterButtons(); //event click
}

function getRandomWord(){
    const word = words[Math.floor(Math.random() * words.length)];  //math.floor => rounds to int 
    return word
}

function answers(){
    // displaying the _ section
    const answerSection  = document.getElementById('answer-section')
    answerSection.innerHTML = ''; 

    correctGuesses.forEach((letter) =>{
        const span = document.createElement('span'); //create new span for _
        span.innerText = letter;  // set the text to current letter (in this case its _ )
        answerSection.appendChild(span);  // appennd span to answersection
    })
    console.log(answerSection)
}

function setupLetterButtons(){
    const letters = document.querySelectorAll('.letter');

    letters.forEach(letterBtn => {
        letterBtn.addEventListener('click' , () => {
            const guessedLetter = letterBtn.innerText.toLowerCase();
            handleGuess(guessedLetter)
        })
    });
}


function handleGuess (letter){
    if (selectedWord.includes(letter)) {
        // If yes, we update
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                correctGuesses[i] = letter; // Correctly assign the guessed letter
            }
        }
    } else {
        incorrectGuesses++;
        // Letter incorrect 
        console.log("Incorrect guesses " + incorrectGuesses);

        // Check if the player has lost
        if (incorrectGuesses >= maxIncorrectGuesses) {
            alert("Game Over! The word was: " + selectedWord);
            resetGame(); 
        }
        else{
            //update hangman
            drawHangman();
        }
    }

    // Check if the player has won
    if (!correctGuesses.includes('_')) {
        alert("Congratulations! You've guessed the word: " + selectedWord);
        resetGame();
    }
    answers(); // To update our display with new guesses
}

function resetGame() {
    incorrectGuesses = 0; 
    resetHangman();
    initGame(); //reset
}

initGame(); // starting the game
