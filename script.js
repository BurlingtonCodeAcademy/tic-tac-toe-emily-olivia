
/* story one */
// Given an empty board
let startButton = document.getElementById('start')
let status = document.getElementById('status')
let player = ''

startButton.addEventListener('click', () => {    // When the user clicks 'Start Game'
    startButton.disabled = true;     //the 'Start Game' button is disabled
    status.innerText = "player x's turn" //the status area contains "Player X's turn"
    player = 'x'
})

/* story two */
// when the user selects a cell
let clickedCell = Array.from(document.getElementsByClassName('cell'));

clickedCell.forEach(function (clickedCellArrayItem) {
    clickedCellArrayItem.addEventListener("click", (evt) => {
        if (player === 'x') {
            clickedCellArrayItem.textContent = 'x'  //an x appears in that cell
            // clickedCellArrayItem.removeEventListener('click', selectedCell, true)
            player = "o"
            status.innerText = "player o's turn"
        } else {
            clickedCellArrayItem.textContent = 'o'  //an o appears in that cell
            player = 'x'
            status.innerText = "player x's turn"
        }
    })
})

        // and the turn ends

        // and the current player changes from x to o, which
        // olivia is thinking means comp move function with random math 
