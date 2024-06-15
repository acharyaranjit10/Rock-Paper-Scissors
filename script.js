let playerScore = 0;
let computerScore = 0;
let userChoice;
let msg = document.querySelector("#msg");

let playerScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];//choice return garya
}

const drawGame = () => {

    msg.innerText = "Game Draw! Play Again.";
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        playerScore++;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        playerScorePara.innerText=playerScore;
    }
    else {
        computerScore++;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        compScorePara.innerText=computerScore;
    }
}

const playGame = () => {
    // generate comp choice
    const compChoice = genCompChoice();
    console.log(userChoice);
    console.log(compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

const choices = document.querySelectorAll(".game-items");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("Id");
        playGame(userChoice);

    })
})
