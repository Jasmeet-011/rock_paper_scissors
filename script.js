let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

const drawGame = () => {
  msg.innerText = "Draw";
};

const showWinner = (userWin) => {
  if (userWin) {
    msg.innerText = "You Won";
    userScore++;
    user.innerText = userScore;
  } else {
    msg.innerText = "You Lost";
    compScore++;
    comp.innerText = compScore;
  }
};

const playGame = (userchoice) => {
  const compChoice = getCompChoice();
  console.log("Comp", compChoice);
  console.log(userchoice);
  if (userchoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const userchoice = choice.getAttribute("id");
    //console.log(userchoice);
    playGame(userchoice);
  });
});
