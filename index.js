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

function getComputerChoice() {
  computerChoice = throwOptions[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  return computerChoice;
}

function getUserstatus() {
  let userStatus = null;
  while (userStatus !== "y") {
    userStatus = prompt(
      "Would you like to start a new RPC Game? y for yes n for no:"
    );
  }

  playRound();
}

function playRound(playerSelection, computerChoice) {
  playerSelection = null;
  while (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    console.log(playerSelection);
    playerSelection = prompt(
      "please enter valid Throw: Rock Paper or Scissors"
    );
    playerSelection = playerSelection.toLowerCase();
  }

  computerChoice = getComputerChoice();

  if (playerSelection === computerChoice) {
    alert("It's a draw!");
  } else if (playerSelection === "rock" && computerChoice === "scissors") {
    alert("You win! Rock beats scissors");
  } else if (playerSelection === "rock" && computerChoice === "paper") {
    alert("You lose! Paper beats rock");
  } else if (playerSelection === "paper" && computerChoice === "rock") {
    alert("You win! Paper beats rock");
  } else if (playerSelection === "paper" && computerChoice === "scissors") {
    alert("You lose! Scissors beat paper");
  } else if (playerSelection === "scissors" && computerChoice === "paper") {
    alert("You win! Scissors beat paper");
  } else if (playerSelection === "scissors" && computerChoice === "rock") {
    alert("You lose!Rock beats scissors");
  }
  getUserstatus();
}

playRound();
