// global variables
let startButton = document.getElementById('start')
let status = document.getElementById('status')
let clickedCell = Array.from(document.getElementsByClassName('empty'))
let player = ''
let nameOne = document.getElementById('playerOne')
let nameTwo = document.getElementById('playerTwo')
let nameForm = document.getElementById('playerNames')
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
startButton.disabled = true;

pvpButton.addEventListener('click', (evt) => {
    pvcButton.disabled = true
    startGamepvp()
})

pvcButton.addEventListener('click', (evt) => {
    pvpButton.disabled = true
    startGamepvc()
})


// ************** stopwatch functions ****************//
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


function startGamepvc() {
    submit.disabled = true
    startButton.disabled = false
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
        status.innerText = 'Player\'s turn'
        player = 'x'
        gameOver = false

        clickedCell.forEach(function (clickedCellArrayItem) {
            clickedCellArrayItem.addEventListener("click", newFunctionpvc)
        })
    })
}


function startGamepvp() {
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
            clickedCellArrayItem.addEventListener("click", newFunctionpvp)
        })
    })
}

// ******************************************************
// ******************************************************
// ******************************************************
function newFunctionpvc(evt) {
    let nameOne = "Player X"
    let nameTwo = "Computer"
    if (player === 'x' && gameOver === false) {
        evt.target.textContent = 'x'  //an x appears in that cell // and the turn ends
        status.innerText = `${nameTwo}'s turn` // and the current player changes from x to o
        evt.target.removeEventListener('click', newFunctionpvc) // this keeps the player from selecting a filled cell
        evt.target.addEventListener('click', emptyAlert)
        determineWin();

        let move = Math.floor(Math.random() * 9) + 1
        console.log(move)
        let compMove = 'game' + move.toString()
        console.log(compMove)
        let newArray = [compMove]
        console.log(newArray[0])
        let hope = document.getElementById(newArray[0])
        console.log(hope)
        hope.innerText = 'o'
        // if (newArray[0].innerText === '') {
        //     let hope = document.getElementById(newArray[0])
        //     console.log(hope)
        //     hope.innerText = 'o'
        //     console.log(hope + ' hello?')
        // } else {
        //     console.log('damn')
        // }
           // and the turn ends
        status.innerText = `${nameOne}'s turn` // and the current player changes from o to x
        determineWin();
    }
}
// ******************************************************
// ******************************************************
// ******************************************************


function addNames(evt) {
    evt.preventDefault()
    let nameOne = playerOne.value
    let nameTwo = playerTwo.value
    status.innerText = nameOne + ' will be X\'s. ' + nameTwo + ' will be O\'s.'
    startButton.disabled = false
}

function newFunctionpvp(evt) {
    if (player === 'x' && gameOver === false) {
        evt.target.textContent = 'x'  //an x appears in that cell
        player = "o"  // and the turn ends
        status.innerText = nameTwo.value + '\'s turn!' // and the current player changes from x to o
        evt.target.removeEventListener('click', newFunctionpvp) // this keeps the player from selecting a filled cell
        evt.target.addEventListener('click', emptyAlert)
        determineWin();
    } else if (player === 'o' && gameOver === false) {
        evt.target.textContent = 'o'  //an o appears in that cell
        player = 'x'   // and the turn ends
        status.innerText = nameOne.value + '\'s turn!' // and the current player changes from o to x
        evt.target.removeEventListener('click', newFunctionpvp) // this keeps the player from selecting a filled cell
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
        status.innerText = `Game Over! ${nameOne.value} wins!`
        gameOver = true
        resetTime();
        reset();


    } else if (game4.textContent === 'x' && game5.textContent === 'x' && game6.textContent === 'x') {
        game4.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game6.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameOne.value} wins!`
        gameOver = true
        resetTime();
        reset();


    } else if (game7.textContent === 'x' && game8.textContent === 'x' && game9.textContent === 'x') {
        game7.style.backgroundColor = "red"
        game8.style.backgroundColor = "red"
        game9.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameOne.value} wins!`
        gameOver = true
        resetTime();
        reset();


    } else if (game1.textContent === 'x' && game4.textContent === 'x' && game7.textContent === 'x') {
        game1.style.backgroundColor = "red"
        game4.style.backgroundColor = "red"
        game7.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameOne.value} wins!`
        gameOver = true
        resetTime();
        reset();


    } else if (game2.textContent === 'x' && game5.textContent === 'x' && game8.textContent === 'x') {
        game2.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game8.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameOne.value} wins!`
        gameOver = true
        resetTime();
        reset();

    } else if (game3.textContent === 'x' && game6.textContent === 'x' && game9.textContent === 'x') {
        game3.style.backgroundColor = "red"
        game6.style.backgroundColor = "red"
        game9.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameOne.value} wins!`
        gameOver = true
        resetTime();
        reset();

    } else if (game7.textContent === 'x' && game5.textContent === 'x' && game3.textContent === 'x') {
        game7.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game3.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameOne.value} wins!`
        gameOver = true
        resetTime();
        reset();

    } else if (game1.textContent === 'x' && game5.textContent === 'x' && game9.textContent === 'x') {
        game1.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game9.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameOne.value} wins!`
        gameOver = true
        resetTime();
        reset();

    } else if (game1.textContent === 'o' && game2.textContent === 'o' && game3.textContent === 'o') {
        game1.style.backgroundColor = "red"
        game2.style.backgroundColor = "red"
        game3.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameTwo.value} wins!`
        gameOver = true
        resetTime();
        reset();

    } else if (game4.textContent === 'o' && game5.textContent === 'o' && game6.textContent === 'o') {
        game4.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game6.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameTwo.value} wins!`
        gameOver = true
        resetTime();
        reset();

    } else if (game7.textContent === 'o' && game8.textContent === 'o' && game9.textContent === 'o') {
        game7.style.backgroundColor = "red"
        game8.style.backgroundColor = "red"
        game9.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameTwo.value} wins!`
        gameOver = true
        resetTime();
        reset();

    } else if (game1.textContent === 'o' && game4.textContent === 'o' && game7.textContent === 'o') {
        game1.style.backgroundColor = "red"
        game4.style.backgroundColor = "red"
        game7.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameTwo.value} wins!`
        gameOver = true
        resetTime();
        reset();

    } else if (game2.textContent === 'o' && game5.textContent === 'o' && game8.textContent === 'o') {
        game2.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game8.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameTwo.value} wins!`
        gameOver = true
        resetTime();
        reset();

    } else if (game3.textContent === 'o' && game6.textContent === 'o' && game9.textContent === 'o') {
        game3.style.backgroundColor = "red"
        game6.style.backgroundColor = "red"
        game9.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameTwo.value} wins!`
        gameOver = true
        resetTime();
        reset();

    } else if (game7.textContent === 'o' && game5.textContent === 'o' && game3.textContent === 'o') {
        game7.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game3.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameTwo.value} wins!`
        gameOver = true
        resetTime();
        reset();

    } else if (game1.textContent === 'o' && game5.textContent === 'o' && game9.textContent === 'o') {
        game1.style.backgroundColor = "red"
        game5.style.backgroundColor = "red"
        game9.style.backgroundColor = "red"
        status.innerText = `Game Over! ${nameTwo.value} wins!`
        gameOver = true
        resetTime();
        reset();

    } else if (game1.textContent !== "" && game2.textContent !== "" && game3.textContent !== "" && game4.textContent !== "" && game5.textContent !== "" && game6.textContent !== "" && game7.textContent !== "" && game8.textContent !== "" && game9.textContent !== "") {
        alert("It's a draw!!!")
        status.innerText = 'BETTER LUCK NEXT TIME'
        gameOver = true
        resetTime();
        reset();

    }
}

function reset() {
    startButton.innerText = "PLAY AGAIN"
    startButton.disabled = false;
    player = "x"
    clickedCell.forEach(function (cell) {
        cell.removeEventListener('click', emptyAlert)
        cell.removeEventListener('click', newFunctionpvp)
        cell.addEventListener('click', newFunctionpvp)
    })
}