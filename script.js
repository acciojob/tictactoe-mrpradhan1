//your JS code here. If required.
const gridItems = document.querySelectorAll(".game > div");
const gameContainer = document.getElementsByClassName("game")[0];
const form = document.forms[0];
const activePlayer = document.getElementById("active-player");
const messageDiv = document.createElement("div");

let player1, player2;
let turn;

form.addEventListener("submit", addPlayers);

function addPlayers(e) {
  e.preventDefault();
  player1 = form["name1"].value;
  player2 = form["name2"].value;
  turn = 1;
  updateName();
  gameContainer.setAttribute("data-game-enabled", "true");
}

function updateName() {
  let currentPlayer = turn === 1 ? player1 : player2;
  activePlayer.innerText = `${currentPlayer}'s turn`;
}

function checkWin() {
  const winningPatterns = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  let winner = null; // Variable to store the winner's name

  for (const pattern of winningPatterns) {
    const [a, b, c] = pattern;
    if (
      gridItems[a - 1].innerText !== "" &&
      gridItems[a - 1].innerText === gridItems[b - 1].innerText &&
      gridItems[a - 1].innerText === gridItems[c - 1].innerText
    ) {
      winner = turn === 1 ? player1 : player2;
      break;
    }
  }

  if (winner) {
    displayMessage(`${winner} congratulations you won!`);
    gameContainer.setAttribute("data-game-enabled", "false");
  } else {
    // Check for a draw
    const isDraw = Array.from(gridItems).every((item) => item.innerText !== "");
    if (isDraw) {
      displayMessage("It's a draw!");
      gameContainer.setAttribute("data-game-enabled", "false");
    }
  }
}

function displayMessage(text) {
  messageDiv.innerText = text;
  messageDiv.className = "message";
  document.body.appendChild(messageDiv);
}

function onClickItem(event) {
  if (player1 !== undefined && player2 !== undefined) {
    const gridItem = event.target;
    if (gridItem.innerText !== "") {
      return;
    }
    const isGameEnabled = gameContainer.getAttribute("data-game-enabled");
    if (isGameEnabled === "false") {
      return;
    }
    if (turn === 1) {
      gridItem.innerText = "X";
    } else {
      gridItem.innerText = "O";
    }
    checkWin();
    turn = turn === 1 ? 2 : 1;
    updateName();
  } else {
    alert("Please enter the player's name!");
  }
}

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener("click", onClickItem);
}
