//your JS code here. If required.
// Start Game events and data changes
const button = document.querySelectorAll('div>button');
var player1, player2;
button[0].addEventListener('click', submitFunc);

function submitFunc() {
    const player = document.querySelectorAll('div>input');
    
    player1 = player[0].value;
    player2 = player[1].value;
    if(player1&&player2) {
        const inputCont = document.getElementById("input-cont");
        const gridCont = document.getElementById("grid-cont");
        inputCont.style.display = 'none';
        gridCont.style.display = 'flex';

        gameStart();
    }
    else {
        alert('Please enter both the player names');
    }
}

function gameStart() {
    const subHeading = document.getElementsByClassName('message');
    
    subHeading[0].innerText = player1+", you're up";
}

var turn = 0;
var gameOn = true;
var count = 0;

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');

one.addEventListener('click', placeYourPick);
two.addEventListener('click', placeYourPick);
three.addEventListener('click', placeYourPick);
four.addEventListener('click', placeYourPick);
five.addEventListener('click', placeYourPick);
six.addEventListener('click', placeYourPick);
seven.addEventListener('click', placeYourPick);
eight.addEventListener('click', placeYourPick);
nine.addEventListener('click', placeYourPick);


function placeYourPick(event) {
    if(count!=9&&gameOn) {
        let playerMark = 'o';
        if(turn==0) {
            playerMark = 'x'
        }
        event.srcElement.innerText = playerMark;
        count++;
		const subHeading = document.getElementsByClassName('message');
        let won = checkForWin();
        if(won) {
            gameOn = false;            
            if(turn) {
                subHeading[0].innerText = player2+" congratulations you won!";
            }
            else {
                subHeading[0].innerText = player1+" congratulations you won!";           
            }
        }
		else {
			
			if(turn) {
				subHeading[0].innerText = player1+", you're up";
			}
			else subHeading[0].innerText = player2+", you're up";
		}
        if(turn) {
            turn = 0;
        }
        else turn++;
    }
    else {
        const subHeading = document.getElementsByClassName('message');
        subHeading[0].innerText = "Game Completed, click on restart for a new game";        
    }
}
function checkForWin() {
    if(one.innerText=='x'&&two.innerText=='x'&&three.innerText=='x') {
        return true;
    }
    if(one.innerText=='x'&&four.innerText=='x'&&seven.innerText=='x') {
        return true;
    }
    if(four.innerText=='x'&&five.innerText=='x'&&six.innerText=='x') {
        return true;
    }
    if(seven.innerText=='x'&&eight.innerText=='x'&&nine.innerText=='x') {
        return true;
    }
    if(five.innerText=='x'&&two.innerText=='x'&&eight.innerText=='x') {
        return true;
    }
    if(six.innerText=='x'&&nine.innerText=='x'&&three.innerText=='x') {
        return true;
    }
    if(one.innerText=='x'&&five.innerText=='x'&&nine.innerText=='x') {
        return true;
    }
    if(three.innerText=='x'&&five.innerText=='x'&&seven.innerText=='x') {
        return true;
    }
    
    if(one.innerText=='o'&&two.innerText=='o'&&three.innerText=='o') {
        return true;
    }
    if(one.innerText=='o'&&four.innerText=='o'&&seven.innerText=='o') {
        return true;
    }
    if(four.innerText=='o'&&five.innerText=='o'&&six.innerText=='o') {
        return true;
    }
    if(seven.innerText=='o'&&eight.innerText=='o'&&nine.innerText=='o') {
        return true;
    }
    if(five.innerText=='o'&&two.innerText=='o'&&eight.innerText=='o') {
        return true;
    }
    if(six.innerText=='o'&&nine.innerText=='o'&&three.innerText=='o') {
        return true;
    }
    if(one.innerText=='o'&&five.innerText=='o'&&nine.innerText=='o') {
        return true;
    }
    if(three.innerText=='o'&&five.innerText=='o'&&seven.innerText=='o') {
        return true;
    }
    return false;
}

button[1].addEventListener('click', clearBoard);
button[2].addEventListener('click',restartGame);

function clearBoard() {
    count = 0;
    one.innerText = '';
    two.innerText = '';
    three.innerText = '';
    four.innerText = '';
    five.innerText = '';
    six.innerText = '';
    seven.innerText = '';
    eight.innerText = '';
    nine.innerText = '';
    turn = 0;
    gameOn = true;
}

function restartGame() {
    const inputCont = document.getElementById("input-cont");
    const gridCont = document.getElementById("grid-cont");
    inputCont.style.display = 'block';
    gridCont.style.display = 'none';
    clearBoard();
}