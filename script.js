
/* story one */
// Given an empty board
let startButton = document.getElementById('start')
let status = document.getElementById('status')
let player = ''
let clickedCell = Array.from(document.getElementsByClassName('cell')); // when the user selects a cell

startButton.addEventListener('click', () => {    // When the user clicks 'Start Game'
    startButton.disabled = true;     //the 'Start Game' button is disabled
    status.innerText = "player x's turn" //the status area contains "Player X's turn"
    player = 'x'
})

/* story two */

// clickedCell.forEach(function (clickedCellArrayItem) {
//     clickedCellArrayItem.addEventListener("click", (evt) => {
//         if (player === 'x') {
//             clickedCellArrayItem.textContent = 'x'  //an x appears in that cell
//             player = "o"  // and the turn ends
//             status.innerText = "player o's turn" // and the current player changes from x to o
//         } else {
//             clickedCellArrayItem.textContent = 'o'  //an o appears in that cell
//             player = 'x'   // and the turn ends
//             status.innerText = "player x's turn" // and the current player changes from o to x
//         }
//     })
// })

/* story three */
// when the user selects a cell that has been filled
// the game says 'please select an empty cell
// and the current player does not change


clickedCell.forEach(function (clickedCellArrayItem) {
    clickedCellArrayItem.addEventListener("click", function newFunction(evt) {
        if (player === 'x') {
            clickedCellArrayItem.textContent = 'x'  //an x appears in that cell
            player = "o"  // and the turn ends
            status.innerText = "player o's turn" // and the current player changes from x to o
            evt.target.removeEventListener('click', newFunction) // this keeps the player from selecting a filled cell
        } else {
            clickedCellArrayItem.textContent = 'o'  //an o appears in that cell
            player = 'x'   // and the turn ends
            status.innerText = "player x's turn" // and the current player changes from o to x
            evt.target.removeEventListener('click', newFunction) // this keeps the player from selecting a filled cell
        }
    })
})
