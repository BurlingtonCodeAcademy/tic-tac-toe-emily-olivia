
/* story one */
// Given an empty board
let startButton = document.getElementById('start')
let status= document.getElementById('status')

startButton.addEventListener('click', () => {    // When the user clicks 'Start Game'
    startButton.disabled =true;     //the 'Start Game' button is disabled
    status.innerText = "player x's turn" //the status area contains "Player X's turn"
})

