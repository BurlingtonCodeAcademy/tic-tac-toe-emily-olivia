
/* story one */
// Given an empty board
let startButton = document.getElementById('start')
let status = document.getElementById('status')
let player = ''

startButton.addEventListener('click', () => {    // When the user clicks 'Start Game'
    startButton.disabled = true;     //the 'Start Game' button is disabled
    status.innerText = "player x's turn" //the status area contains "Player X's turn"
    player = 'x'

    let clickedCell = Array.from(document.getElementsByClassName('cell'));

    clickedCell.forEach(function handler(clickedCellArrayItem) {
        clickedCellArrayItem.addEventListener("click", (evt) => {
            if (player === 'x') {
                clickedCellArrayItem.textContent = 'x'  //an x appears in that cell
                player = "o"
                status.innerText = "player o's turn"
                
            } else
            {
                clickedCellArrayItem.textContent = 'o'  //an o appears in that cell
                player = 'x'
                status.innerText = "player x's turn"

            }
        })
    })

})

/* story two */
// when the user selects a cell

        // and the turn ends

        // and the current player changes from x to o, which
        // olivia is thinking means comp move function with random math 

