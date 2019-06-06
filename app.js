//console.log("hello" );
let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");
const resulth1_div = document.querySelector(".result > h1");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomizer = Math.floor(Math.random()* 3);
  return choices[randomizer];
}

function convertToString(letter) {
  if (letter === "rock") return "Rock";
  if (letter === "paper") return "Paper";
  if (letter === "scissors") return "Scissors";
}

function winning(userChoice, computerChoice) {
  //console.log("WIN");
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  resulth1_div.innerHTML = `${convertToString(userChoice)}${smallUser} beats  ${convertToString(computerChoice)}${smallComp}. You win!`;
  //resulth1_div.innerHTML = `${convertToString(userChoice)} beats computerChoice. You win!`;

  //Changing border colors
  userChoice_div.classList.add('green-glow');
  setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 1000)
}


function losing(userChoice, computerChoice) {
  //console.log("LOSE");
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  resulth1_div.innerHTML = `${userChoice}${smallUser} loses to ${computerChoice}${smallComp}. You lost...`;

  userChoice_div.classList.add('red-glow');
  setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 1000)
}

function draw(userChoice, computerChoice) {
  //console.log("DRAW");
  const smallUser = "user".fontsize(3).sub();
  const smallComp = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  resulth1_div.innerHTML = `${userChoice}${smallUser} equals ${computerChoice}${smallComp}. It's a draw.`;

  userChoice_div.classList.add('gray-glow');
  setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 1000)
}

function gameplay(userChoice) {
  //console.log("the user chose " + userChoice);
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      console.log("USER WINS");
      winning(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      console.log("USER LOSES");
      losing(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log("DRAW");
      draw(userChoice, computerChoice);
      break;
  }
  console.log("computer chose => " + computerChoice);
  console.log("user chose => " + userChoice);
}

function main() {
  //event listeners
  rock_div.addEventListener('click', function() {
    console.log("you clicked on the rock.");
    gameplay("rock");
  })
  paper_div.addEventListener('click', function() {
    console.log("you clicked on the paper.");
    gameplay("paper");
  })
  scissors_div.addEventListener('click', function() {
    console.log("you clicked on the scissors.");
    gameplay("scissors");
  })
}

main();
