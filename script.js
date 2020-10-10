// gather objects
let startButton = document.getElementById('start')
let status = document.getElementById('status')
let clickedCell = Array.from(document.getElementsByClassName('empty'))
let game1 = document.getElementById('game1')
let game2 = document.getElementById('game2')
let game3 = document.getElementById('game3')
let game4 = document.getElementById('game4')
let game5 = document.getElementById('game5')
let game6 = document.getElementById('game6')
let game7 = document.getElementById('game7')
let game8 = document.getElementById('game8')
let game9 = document.getElementById('game9')


startButton.addEventListener('click', () => {
    startButton.disabled = true;
    status.innerText = "player x's turn"
    player = 'x'
})

clickedCell.forEach(function (clickedCellArrayItem) {

    clickedCellArrayItem.addEventListener("click", function newFunction(evt) {
        if (player === 'x' && document.querySelector('.empty')) {
            clickedCellArrayItem.textContent = 'x'  //an x appears in that cell
            playerMoves = evt.target.id
            console.log(playerMoves)
            player = "o"  // and the turn ends
            status.innerText = "player o's turn" // and the current player changes from x to o
            evt.target.removeEventListener('click', newFunction) // this keeps the player from selecting a filled cell
            evt.target.addEventListener('click', (evt) => {
                alert('please select an empty cell')
            })
        } else if (player === 'o' && document.querySelector('.empty')) {
            clickedCellArrayItem.textContent = 'o'  //an o appears in that cell
            player = 'x'   // and the turn ends
            status.innerText = "player x's turn" // and the current player changes from o to x
            evt.target.removeEventListener('click', newFunction) // this keeps the player from selecting a filled cell
            evt.target.addEventListener('click', (evt) => {
                alert('please select an empty cell')
            })
        }
    })
})

// **********************************
// make 9 variables at the top 
// after clickedcell function we will define
// win condition function where we define each win condition for player x 
// player -- 16 logic blocks with an else catch all/draw
// call variables saying if game1.textcontent === , etc etc etc.
// modify styling of each block when theres a winner
// disable game.
// call that function in our newFunction to see if win condition has been met


// compare the text content of our board, no need to compare the array 
if cell content === x and the next === x and the next === x,
    alert you win, throw a line, disable moves.


let win1 = game1.textContent, game2.textContent, game3.textContent
let win2 = game4.textContent, game5.textContent, game6.textContent
let win3 = game7.textContent, game8.textContent, game9.textContent
let win4 = game1.textContent, game4.textContent, game7.textContent
let win5 = game2.textContent, game5.textContent, game8.textContent
let win6 = game3.textContent, game6.textContent, game9.textContent
let win7 = game7.textContent, game5.textContent, game3.textContent
let win8 = game1.textContent, game5.textContent, game9.textContent


function determineWin() {
    if (playerX === win1) {
        alert('Player X Wins')
    } else if (playerX === win2) {
        alert('Player X Wins')
    } else if (playerX === win3) {
        alert('Player X Wins')
    } else if (playerX === win4) {
        alert('Player X Wins')
    } else if (playerX === win5) {
        alert('Player X Wins')
    } else if (playerX === win6) {
        alert('Player X Wins')
    } else if (playerX === win7) {
        alert('Player X Wins')
    } else if (playerX === win8) {
        alert('Player X Wins')
    } else if (playerO === win1) {
        alert('Player O Wins')
    } else if (playerO === win2) {
        alert('Player O Wins')
    } else if (playerO === win3) {
        alert('Player O Wins')
    } else if (playerO === win4) {
        alert('Player O Wins')
    } else if (playerO === win5) {
        alert('Player O Wins')
    } else if (playerO === win6) {
        alert('Player O Wins')
    } else if (playerO === win7) {
        alert('Player O Wins')
    } else if (playerO === win8) {
        alert('Player O Wins')
    }
       

// Win Condition
// Given the turn has just ended

// When if there are three Xs in a row, column, or diagonal

// Then the system draws a line through the winning three cells

// And the app says "Congratulations! Player X wins!"

// And the game ends

// (and likewise for Player O)