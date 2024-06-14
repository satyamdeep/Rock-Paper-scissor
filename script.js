let yourScore = 0;
let pcScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#move");
const userScore = document.querySelector("#yourScore");
const comScore = document.querySelector("#pcScore");


const genCompChoice =()=>{
    let options = ["rock", "paper", "scissor"];
    const ranInx = Math.floor(Math.random() *3);
    return options[ranInx];
}

const drawGame =()=>{
     msg.innerText ="Game is draw. Play Again!!";
     msg.style.backgroundColor ="#081b31";
}

const showWinner =(userWin, yourChoice, compChoice )=>{
    if (userWin=== true) {
        yourScore++;
        userScore.innerText =yourScore;
        msg.innerText =`You Win! ${yourChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        pcScore++
        comScore.innerText = pcScore;
        msg.innerText =`You lose!  ${compChoice} beats ${yourChoice}`;
        msg.style.backgroundColor ="red";
    }
} 

const playGame =(yourChoice)=>{
    console.log("Your choice is", yourChoice );

    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice is ", compChoice);

    if (yourChoice === compChoice) {
        //Game Draw
        drawGame();
    }else{
        let userWin = true;
        if (yourChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if (yourChoice === "paper") {
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, yourChoice, compChoice);
    }
}

choices.forEach((choice)=>{

    choice.addEventListener("click", ()=>{
        let yourChoice = choice.getAttribute("id");
       
        playGame(yourChoice);
    })
})
