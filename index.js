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

const throwOptions = ["rock", "paper", "scissors"];

let playerWins = 0;
let comWins = 0;

function getComputerChoice() {
  const computerChoice = throwOptions[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function getPlayerChoice() {
  let playerSelection = null;

  while (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    playerSelection = prompt(
      "please enter valid Throw: Rock Paper or Scissors"
    );

    if (!playerSelection) continue;

    playerSelection = playerSelection.toLowerCase();
  }

  return playerSelection;
}

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
    return "scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "rock";
  }
}

function playRound() {
  let playerSelection = getPlayerChoice();
  let computerSelection = getComputerChoice();

  const winningMove = getWinningMove(playerSelection, computerSelection);
  const didPlayerWin = winningMove === playerSelection;

  if (!winningMove) {
    alert("Tie!");
  } else if (didPlayerWin) {
    playerWins++;
    alert(`You won the round! ${playerSelection} beats ${computerSelection}`);
  } else {
    comWins++;
    alert(`You lost the round! ${computerSelection} beats ${playerSelection}`);
  }
}

function game() {
  while (playerWins < 3 && comWins < 3) {
    playRound();
  }

  if (playerWins > comWins) {
    alert("you won the game message ur code is bad u get to keep ur jobß");
  } else {
    alert("the computers won again guy");
  }
}

game();
