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
let gameOver =




    startButton.addEventListener('click', () => {

        game1.innerText = ''
        game1.style.backgroundColor = "white"
        game2.innerText = ''
        game2.style.backgroundColor = "white"
        game3.innerText = ''
        game3.style.backgroundColor = "white"
        game4.innerText = ''
        game4.style.backgroundColor = "white"
        game5.innerText = ''
        game5.style.backgroundColor = "white"
        game6.innerText = ''
        game6.style.backgroundColor = "white"
        game7.innerText = ''
        game7.style.backgroundColor = "white"
        game8.innerText = ''
        game8.style.backgroundColor = "white"
        game9.innerText = ''
        game9.style.backgroundColor = "white"
        startButton.disabled = true;
        status.innerText = "player x's turn"
        player = 'x'
        gameOver = false

        clickedCell.forEach(function (clickedCellArrayItem) {
            clickedCellArrayItem.addEventListener("click", newFunction)
        })
    })


// **********************************
// compare the text content of our board, no need to compare the array 
// if cell content === x and the next === x and the next === x,
//     alert you win, throw a line, disable moves.

function newFunction(evt) {
    console.log(player + "line 47 before if else")
    if (player === 'x' && gameOver === false) {
        evt.target.textContent = 'x'  //an x appears in that cell
        player = "o"  // and the turn ends
        console.log(player + "after player x clicks and should turn to o")
        status.innerText = "player o's turn" // and the current player changes from x to o
        evt.target.removeEventListener('click', newFunction) // this keeps the player from selecting a filled cell
        evt.target.addEventListener('click', emptyAlert)
        determineWin();
    } else if (player === 'o' && gameOver === false) {
        evt.target.textContent = 'o'  //an o appears in that cell
        player = 'x'   // and the turn ends
        console.log(player + "after player o clicks and should turn to x")
        status.innerText = "player x's turn" // and the current player changes from o to x
        evt.target.removeEventListener('click', newFunction) // this keeps the player from selecting a filled cell
        evt.target.addEventListener('click', emptyAlert)
        determineWin();
    }
}



function emptyAlert(evt) {
    alert('please select an empty cell')
}

function determineWin() {
    if (game1.textContent === 'x' && game2.textContent === 'x' && game3.textContent === 'x') {
        game1.style.backgroundColor = "red"
        game2.style.backgroundColor = "red"
        game3.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player X Wins!'
        gameOver = true
        reset();

    } else if (game4.textContent === 'x' && game5.textContent === 'x' && game6.textContent === 'x') {
        game4.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game6.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player X Wins!'
        gameOver = true
        reset();


    } else if (game7.textContent === 'x' && game8.textContent === 'x' && game9.textContent === 'x') {
        game7.style.backgroundColor = "red"
        game8.style.backgroundColor = "red"
        game9.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player X Wins!'
        gameOver = true
        reset();


    } else if (game1.textContent === 'x' && game4.textContent === 'x' && game7.textContent === 'x') {
        game1.style.backgroundColor = "red"
        game4.style.backgroundColor = "red"
        game7.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player X Wins!'
        gameOver = true
        reset();


    } else if (game2.textContent === 'x' && game5.textContent === 'x' && game8.textContent === 'x') {
        game2.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game8.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player X Wins!'
        gameOver = true
        reset();

    } else if (game3.textContent === 'x' && game6.textContent === 'x' && game9.textContent === 'x') {
        game3.style.backgroundColor = "red"
        game6.style.backgroundColor = "red"
        game9.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player X Wins!'
        gameOver = true
        reset();

    } else if (game7.textContent === 'x' && game5.textContent === 'x' && game3.textContent === 'x') {
        game7.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game3.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player X Wins!'
        gameOver = true
        reset();

    } else if (game1.textContent === 'x' && game5.textContent === 'x' && game9.textContent === 'x') {
        game1.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game9.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player X Wins!'
        gameOver = true
        reset();

    } else if (game1.textContent === 'o' && game2.textContent === 'o' && game3.textContent === 'o') {
        game1.style.backgroundColor = "red"
        game2.style.backgroundColor = "red"
        game3.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player O Wins!'
        gameOver = true
        reset();

    } else if (game4.textContent === 'o' && game5.textContent === 'o' && game6.textContent === 'o') {
        game4.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game6.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player O Wins!'
        gameOver = true
        reset();

    } else if (game7.textContent === 'o' && game8.textContent === 'o' && game9.textContent === 'o') {
        game7.style.backgroundColor = "red"
        game8.style.backgroundColor = "red"
        game9.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player O Wins!'
        gameOver = true
        reset();

    } else if (game1.textContent === 'o' && game4.textContent === 'o' && game7.textContent === 'o') {
        game1.style.backgroundColor = "red"
        game4.style.backgroundColor = "red"
        game7.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player O Wins!'
        gameOver = true
        reset();

    } else if (game2.textContent === 'o' && game5.textContent === 'o' && game8.textContent === 'o') {
        game2.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game8.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player O Wins!'
        gameOver = true
        reset();

    } else if (game3.textContent === 'o' && game6.textContent === 'o' && game9.textContent === 'o') {
        game3.style.backgroundColor = "red"
        game6.style.backgroundColor = "red"
        game9.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player O Wins!'
        gameOver = true
        reset();

    } else if (game7.textContent === 'o' && game5.textContent === 'o' && game3.textContent === 'o') {
        game7.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game3.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player O Wins!'
        gameOver = true
        reset();

    } else if (game1.textContent === 'o' && game5.textContent === 'o' && game9.textContent === 'o') {
        game1.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game9.style.backgroundColor = "red"
        status.innerText = 'Game Over! Player O Wins!'
        gameOver = true
        reset();

    } else if (game1.textContent !== "" && game2.textContent !== "" && game3.textContent !== "" && game4.textContent !== "" && game5.textContent !== "" && game6.textContent !== "" && game7.textContent !== "" && game8.textContent !== "" && game9.textContent !== "") {
        alert("It's a draw!!!")
        status.innerText = 'TRY AGAIN'
        gameOver = true
        reset();

    }
}

function reset() {
    startButton.innerText = "PLAY AGAIN"
    startButton.disabled = false;
    player = "x"
    clickedCell.forEach(function (cell){
        cell.removeEventListener('click', emptyAlert)
        cell.removeEventListener('click', newFunction)
        cell.addEventListener('click', newFunction)
    })
    

}