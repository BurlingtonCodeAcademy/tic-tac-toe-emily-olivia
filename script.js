// gather objects
let startButton = document.getElementById('start')
let status = document.getElementById('status')
let clickedCell = Array.from(document.getElementsByClassName('empty'))
let player = ''
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
            player = "o"  // and the turn ends
            status.innerText = "player o's turn" // and the current player changes from x to o
            evt.target.removeEventListener('click', newFunction) // this keeps the player from selecting a filled cell
            evt.target.addEventListener('click', (evt) => {
                alert('please select an empty cell')
            })
            determineWin();
        } else if (player === 'o' && document.querySelector('.empty')) {
            clickedCellArrayItem.textContent = 'o'  //an o appears in that cell
            player = 'x'   // and the turn ends
            status.innerText = "player x's turn" // and the current player changes from o to x
            evt.target.removeEventListener('click', newFunction) // this keeps the player from selecting a filled cell
            evt.target.addEventListener('click', (evt) => {
                alert('please select an empty cell')
            })
            determineWin();
        }
    })
})

// **********************************
// compare the text content of our board, no need to compare the array 
// if cell content === x and the next === x and the next === x,
//     alert you win, throw a line, disable moves.

function determineWin() {
    if (game1.textContent === 'x' && game2.textContent === 'x' && game3.textContent === 'x') {
        alert('Congratulations! Player X Wins')
        status.innerText = 'Game Over! Player X Wins!'
    } else if (game4.textContent === 'x' && game5.textContent === 'x' && game6.textContent === 'x') {
        alert('Congratulations! Player X Wins')
        status.innerText = 'Game Over! Player X Wins!'
    } else if (game7.textContent === 'x' && game8.textContent === 'x' && game9.textContent === 'x') {
        alert('Congratulations! Player X Wins')
        status.innerText = 'Game Over! Player X Wins!'
    } else if (game1.textContent === 'x' && game4.textContent === 'x' && game7.textContent === 'x') {
        alert('Congratulations! Player X Wins')
        status.innerText = 'Game Over! Player X Wins!'
    } else if (game2.textContent === 'x' && game5.textContent === 'x' && game8.textContent === 'x') {
        alert('Congratulations! Player X Wins')
        status.innerText = 'Game Over! Player X Wins!'
    } else if (game3.textContent === 'x' && game6.textContent === 'x' && game9.textContent === 'x') {
        alert('Congratulations! Player X Wins')
        status.innerText = 'Game Over! Player X Wins!'
    } else if (game7.textContent === 'x' && game5.textContent === 'x' && game3.textContent === 'x') {
        alert('Congratulations! Player X Wins')
        status.innerText = 'Game Over! Player X Wins!'
    } else if (game1.textContent === 'x' && game5.textContent === 'x' && game9.textContent === 'x') {
        alert('Congratulations! Player X Wins')
        status.innerText = 'Game Over! Player X Wins!'
    } else if (game1.textContent === 'o' && game2.textContent === 'o' && game3.textContent === 'o') {
        alert('Congratulations! Player O Wins')
        status.innerText = 'Game Over! Player O Wins!'
    } else if (game4.textContent === 'o' && game5.textContent === 'o' && game6.textContent === 'o') {
        alert('Congratulations! Player O Wins')
        status.innerText = 'Game Over! Player O Wins!'
    } else if (game7.textContent === 'o' && game8.textContent === 'o' && game9.textContent === 'o') {
        alert('Congratulations! Player O Wins')
        status.innerText = 'Game Over! Player O Wins!'
    } else if (game1.textContent === 'o' && game4.textContent === 'o' && game7.textContent === 'o') {
        alert('Congratulations! Player O Wins')
        status.innerText = 'Game Over! Player O Wins!'
    } else if (game2.textContent === 'o' && game5.textContent === 'o' && game8.textContent === 'o') {
        alert('Congratulations! Player O Wins')
        status.innerText = 'Game Over! Player O Wins!'
    } else if (game3.textContent === 'o' && game6.textContent === 'o' && game9.textContent === 'o') {
        alert('Congratulations! Player O Wins')
        status.innerText = 'Game Over! Player O Wins!'
    } else if (game7.textContent === 'o' && game5.textContent === 'o' && game3.textContent === 'o') {
        alert('Congratulations! Player O Wins')
        status.innerText = 'Game Over! Player O Wins!'
    } else if (game1.textContent === 'o' && game5.textContent === 'o' && game9.textContent === 'o') {
        alert('Congratulations! Player O Wins')
        status.innerText = 'Game Over! Player O Wins!'  
    }
}