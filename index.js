let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const computer_rock_div = document.getElementById("R");
const computer_paper_div = document.getElementById("P");
const computer_scissors_div = document.getElementById("S");

function getComputerChoice() {
  const choices = ["R", "P", "S"];
  return choices[Math.floor(Math.random() * 3)];
}

function convertToWord(letter) {
  if (letter === "r" || letter === "R") return "Rock";
  if (letter === "p" || letter === "P") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(
    computerChoice
  )}. You WIN! 🎉`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(
    computerChoice
  )}. You LOST! 💀`;
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(
    computerChoice
  )}. It's a DRAW! 👀`;
}

function game(userChoice) {
  computer_rock_div.classList.remove("selected");
  computer_paper_div.classList.remove("selected");
  computer_scissors_div.classList.remove("selected");

  const computerChoice = getComputerChoice();
  switch (computerChoice) {
    case "R":
      computer_rock_div.classList.add("selected");
      break;
    case "P":
      computer_paper_div.classList.add("selected");
      break;
    case "S":
      computer_scissors_div.classList.add("selected");
      break;
  }
  switch (userChoice + computerChoice) {
    case "rS":
    case "pR":
    case "sP":
      win(userChoice, computerChoice);
      break;
    case "rP":
    case "pS":
    case "sR":
      lose(userChoice, computerChoice);
      break;
    case "rR":
    case "pP":
    case "sS":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => {
    game("r");
  });

  paper_div.addEventListener("click", () => {
    game("p");
  });

  scissors_div.addEventListener("click", () => {
    game("s");
  });
}

main();
