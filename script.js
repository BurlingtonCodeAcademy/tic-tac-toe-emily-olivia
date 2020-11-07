// DOM and Global variables
let startButton = document.getElementById('start')
let status = document.getElementById('status')
let clickedCell = Array.from(document.getElementsByClassName('empty'))
let player = ''
let nameOne = document.getElementById('playerOne')
let nameTwo = document.getElementById('playerTwo')
let nameForm = document.getElementById('playerNames')
let squares = document.getElementsByClassName('empty')
console.log(squares)
//get back an object that is iteratable
let game1 = document.getElementById('game1')
let game2 = document.getElementById('game2')
let game3 = document.getElementById('game3')
let game4 = document.getElementById('game4')
let game5 = document.getElementById('game5')
let game6 = document.getElementById('game6')
let game7 = document.getElementById('game7')
let game8 = document.getElementById('game8')
let game9 = document.getElementById('game9')
let gameOver = false
let submit = document.getElementById('submit')
let pvpButton = document.getElementById('pvp')
let pvcButton = document.getElementById('pvc')

// all variables for timer
let seconds = 0
let displaySeconds = 0
let interval = null
let timerStatus = "stopped"


// ***************** gameplay ****************** //
// the browser loads with the start button disabled. First the player must select what type of game they wish to play; Player vs Player or Player vs Computer. 
startButton.disabled = true;

const addStart = (button, startGame) => {
    button.addEventListener('click', (evt) => {
        button.disabled = true
        startGame()
    })
}

addStart(pvpButton, startGamepvp)
addStart(pvcButton, startGamepvc)


// ************** stopwatch functions ****************//
// Depending what the player choses above, a branch of different of events will occur. The first of these is activating the Start button. When it is pressed, a stopwatch function will begin. The code for that is below.

//stopwatch function
function stopWatch() {
    seconds++;

    //display updated time value to game
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else { displaySeconds = seconds; }
    document.getElementById("time").innerText = "Time Elapsed " + displaySeconds + " Seconds";
}

// when the start game or play agin button is clicked the timer will begin
function startStop() {
    if (timerStatus === "stopped") {
        interval = window.setInterval(stopWatch, 1000);
        timerStatus = "started"
    }
}

//clear the interval in the window and set seconds back to 0
function resetTime() {

    window.clearInterval(interval);
    seconds = 0;
}

// ****************** global fuctions ******************* //
// The below functions are responsible for our main gameplay. 

// ************* PVC Functions ********************//
// The blow function determines the board set up at start of play and reset
function startGamepvc() {
    pvcButton.disabled = true
    submit.disabled = true
    startButton.disabled = false
    nameOne.disabled = true
    nameTwo.disabled = true
    startButton.addEventListener('click', () => {
        timerStatus = "stopped"
        document.getElementById("time").innerText = "STARTING GAME COUNTER...."
        startStop();
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
        status.innerText = 'Player X\'s turn'
        player = 'x'
        gameOver = false

        clickedCell.forEach(function (clickedCellArrayItem) {
            clickedCellArrayItem.addEventListener("click", turnsPVC)
        })
    })
}

// The below function is responsible for handling player and computer moves
function turnsPVC(evt) {
    nameOne.value = "Player X"
    nameTwo.value = "Computer"
    if (player === 'x' && gameOver === false && evt.target.textContent !== 'o') {
        // player moves
        evt.target.textContent = 'x'
        evt.target.removeEventListener('click', turnsPVC)
        evt.target.addEventListener('click', emptyAlert)
        determineWin();

        // computer moves
        compMoveFunction()

        status.innerText = `Player X's turn`
        determineWin();
    }
}

// The below function determines the computer move
function compMoveFunction() {
    let compNum = Math.floor(Math.random() * 9) + 1 // generate a random number
    let compMove = 'game' + compNum.toString()      // concatenate the random number with  'game' and turn into a string to create an id name from our HTML cell elements
    let newArray = [compMove] // turn the string into an array so we can access it
    let randomCellId = document.getElementById(newArray[0])
    // access the HTML cell element associated with the randomly generated cell id
    if (randomCellId.innerText === '' && gameOver === false) {
        randomCellId.innerText = 'o'  // fill that cell with an 'o' to signify computer move
        randomCellId.removeEventListener('click', turnsPVC)
        randomCellId.addEventListener('click', emptyAlert)
    } else if (randomCellId.innerText === 'x' || randomCellId.innerText === 'o' && gameOver === false) {
        compMoveFunction()
    } else {
        return randomCellId
    }
}

// ************* PVP Functions ********************//
// The below function gathers player names from the HTML form
function addNames(evt) {
    evt.preventDefault()
    let nameOne = playerOne.value
    let nameTwo = playerTwo.value
    status.innerText = nameOne + ' will be X\'s. ' + nameTwo + ' will be O\'s.'
    startButton.disabled = false
}
// The blow function determines the board set up at start of play and reset
function startGamepvp() {
    pvpButton.disabled = true
    nameForm.addEventListener('submit', addNames)

    startButton.addEventListener('click', () => {
        submit.disabled = true
        timerStatus = "stopped"
        document.getElementById("time").innerText = "STARTING GAME COUNTER...."
        startStop();
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
        status.innerText = nameOne.value + '\'s turn!'
        player = 'x'
        gameOver = false

        clickedCell.forEach(function (clickedCellArrayItem) {
            clickedCellArrayItem.addEventListener("click", turnsPVP)
        })
    })
}
// The blow function handles player vs player turns
function turnsPVP(evt) {
    if (player === 'x' && gameOver === false) {
        evt.target.textContent = 'x'  //an x appears in that cell
        //get elemtent by id
        //change the class from empty to x or o
        player = "o"  // and the turn ends
        status.innerText = nameTwo.value + '\'s turn!' // and the current player changes from x to o
        evt.target.removeEventListener('click', turnsPVP) // this keeps the player from selecting a filled cell
        evt.target.addEventListener('click', emptyAlert)
        determineWin();
    } else if (player === 'o' && gameOver === false) {
        evt.target.textContent = 'o'  //an o appears in that cell
        player = 'x'   // and the turn ends
        status.innerText = nameOne.value + '\'s turn!' // and the current player changes from o to x
        evt.target.removeEventListener('click', turnsPVP) // this keeps the player from selecting a filled cell
        evt.target.addEventListener('click', emptyAlert)
        determineWin();
    }
}

// ****************** General Functions **************** //
// The below function creates an alert when a player tries to select a full cell
function emptyAlert(evt) {
    alert('please select an empty cell')
}

// The below function checks for win conditions and the program's response

let winConditions = [[game1, game2, game3], [game4, game5, game6], [game7, game8, game9], [game1, game4, game7], [game2, game5, game8], [game3, game6, game9], [game7, game5, game3], [game1, game5, game9]]


function determineWinAgain(game1, game2, game3, name) {
    game1.style.backgroundColor = "red"
    game2.style.backgroundColor = "red"
    game3.style.backgroundColor = "red"
    status.innerText = `Game Over! ${name.value} wins!`
    gameOver = true
    resetTime();
    reset();
}

function determineWin() {
    winConditions.forEach(win => {
        if (win[0].textContent === 'x' && win[1].textContent === 'x' && win[2].textContent === 'x') {
            determineWinAgain(win[0], win[1], win[2], nameOne)
        } else if (win[0].textContent === 'o' && win[1].textContent === 'o' && win[2].textContent === 'o') {
            determineWinAgain(win[0], win[1], win[2], nameTwo)
        }
    })


    if (game1.textContent !== "" && game2.textContent !== "" && game3.textContent !== "" && game4.textContent !== "" && game5.textContent !== "" && game6.textContent !== "" && game7.textContent !== "" && game8.textContent !== "" && game9.textContent !== "") {
        gameOver = true
        status.innerText = 'IT\'S A DRAW. BETTER LUCK NEXT TIME'
        resetTime();
        reset();
    }
}

// The below function resets the game when the player selects play again
function reset() {
    startButton.innerText = "PLAY AGAIN"
    startButton.disabled = false;
    player = "x"
    clickedCell.forEach(function (cell) {
        cell.removeEventListener('click', emptyAlert)
        cell.removeEventListener('click', turnsPVP)
        cell.addEventListener('click', turnsPVP)
    })
}