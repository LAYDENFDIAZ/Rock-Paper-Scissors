// RPS

// Rock, Paper, Scissors. The familiar game of Rock, Paper,
// Scissors is played like this: at the same time, two players
// display one of three symbols: a rock, paper, or scissors. A rock beats scissors,
// scissors beat paper by cutting it, and paper beats rock by covering it.

// Create a prompt asking user if they want to play RPS
// create an arrey which stores all computer thow options (rock, paper, or scissors)
// create a computer which generates a ranadom number
// select option at index Computer Choice in arrey previously created
// create input which asks for users choice of throw (rock, paper, or scissors)
// compare the two options to a set of perameters and specifications

// Throw options
const throwOptions = ["rock", "paper", "scissors"];

// player to com wins
let playerWins = 0;
/**
   @todo: fix comWins generating untimited H2 TAGs 
   and com never wins on paper
**/
let comWins = 0;

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

// function which gets computer choice
function getComputerChoice() {
  const computerChoice = throwOptions[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// function which gets player choice
/*function getPlayerChoice() {
  return playerSelection;
}*/

// function which sees who won
function getWinningMove(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return null;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "rock";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "rock";
  }
}

// round logic

function playRound(playerSelection, computerSelection) {
  if (playerWins == 5 || comWins == 5) {
    return;
  } else {
    const p = document.createElement("p");

    const winningMove = getWinningMove(playerSelection, computerSelection);
    const didPlayerWin = winningMove === playerSelection;
    if (!winningMove) {
      p.innerText = `Tie! (player - ${playerWins} ,  com - ${comWins})`;
      document.body.appendChild(p);
    } else if (didPlayerWin) {
      playerWins++;
      p.innerText = `You won the round! ${playerSelection} beats ${computerSelection} (player - ${playerWins} ,  com - ${comWins})`;
      document.body.appendChild(p);
    } else {
      comWins++;
      p.innerText = `You lost the round! ${computerSelection} beats ${playerSelection} (player - ${playerWins} ,  com - ${comWins})`;
      document.body.appendChild(p);
    }
  }
}
const h2 = document.createElement("h2");

function checkForWinner(comWins, playerWins) {
  if (playerWins == 5) {
    h2.innerText = "PLAYER WINS GAME";
    document.body.appendChild(h2);
  } else if (comWins == 5) {
    const h2 = document.createElement("h2");
    h2.innerText = "COM WINS GAME";
    document.body.appendChild(h2);
  }
}
// game logic
function game() {
  if (playerWins < 5 || comWins < 5) {
    rockBtn.addEventListener("click", () => {
      playerSelection = "rock";
      let computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      checkForWinner(comWins, playerWins);
    });

    paperBtn.addEventListener("click", () => {
      playerSelection = "paper";
      let computerSelection = getComputerChoice();

      playRound(playerSelection, computerSelection);
      checkForWinner(comWins, playerWins);
    });

    scissorsBtn.addEventListener("click", () => {
      playerSelection = "scissors";
      let computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      checkForWinner(comWins, playerWins);
    });
  } else if (playerWins == 5 || comWins == 5) {
    return;
  }
}

game();
