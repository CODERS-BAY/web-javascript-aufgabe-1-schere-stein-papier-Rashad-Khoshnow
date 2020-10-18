let userScore = 0;
let computerScore = 0;
let userRound = 0;
let computerRound = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
let userRound_span = document.getElementById("user-round");
let computerRound_span = document.getElementById("computer-round");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let result_p = document.querySelector(".result > p");
let rounds = window.prompt("How many rounds do you want to play? ");

function getComputerChoise() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convert(letter) {
    if (letter === "r") return "rock";
    if (letter === "p") return "paper";
    if (letter === "s") return "scissor";
}

function win(userChoise, computerChoice) {
    if (userScore === 2) {
        userScore = 0;
        computerScore = 0;
        userRound++;
        if (userRound == rounds) {
            userRound = 0;
            computerRound = 0;
            rounds = window.prompt("You won how many rounds do you wanna play this time");
        }


    } else {
        userScore++;
    }
    userRound_span.innerHTML = userRound;
    computerRound_span.innerHTML = computerRound;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convert(userChoise) + " beats " + convert(computerChoice) + " you win ";
}

function lose(userChoise, computerChoice) {
    if (computerScore === 2) {
        computerScore = 0;
        userScore = 0;
        computerRound++;
        if (computerRound == rounds) {
            userRound = 0;
            computerRound = 0;
            rounds = window.prompt("You lost how many rounds do you wanna play this time");

        }


    } else {
        computerScore++;
    }
    userRound_span.innerHTML = userRound;
    computerRound_span.innerHTML = computerRound;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convert(computerChoice) + " beats " + convert(userChoise) + " you lose ";

}

function draw(userChoise, computerChoice) {
    result_p.innerHTML = convert(computerChoice) + " and " + convert(userChoise) + " is a draw ";
}

function game(userChoise) {
    const computerChoice = getComputerChoise();
    switch (userChoise + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoise, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoise, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoise, computerChoice);
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");

    })

    scissors_div.addEventListener('click', function() {
        game("s");

    })
}
main();