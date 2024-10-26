let wrongGuesses = 0;

function drawHangman() {
  const hangmanParts = [
    './assets/head.svg',
    './assets/body.svg',
    './assets/left-hand.svg',
    './assets/right-hand.svg',
    './assets/left-leg.svg',
    './assets/right-leg.svg',
  ];
  
  if (wrongGuesses < hangmanParts.length) {  // to draw only if there is still img to display
    const img = document.createElement('img');
    img.src = hangmanParts[wrongGuesses];
    img.classList.add(getBodyPartClass(wrongGuesses)); //returns the class name for css 
    document.getElementById('hang').appendChild(img); //mani js to display hang img
    wrongGuesses++;
  }
}

function getBodyPartClass(index) {
  const classes = ['head', 'body', 'left-hand', 'right-hand', 'left-leg', 'right-leg'];
  return classes[index];
}

function resetHangman() {
  document.getElementById('hang').innerHTML = '<img src="./assets/hang.svg" class="stand">';
  wrongGuesses = 0;
}
