
let choices = document.querySelectorAll('.show');
const msg = document.querySelector("#msg");
const result = document.querySelector("#result-msg");
const userScoreCount = document.querySelector('#user-score');
const botScoreCount = document.querySelector('#bot-score');
let userScore = 0;
let botScore = 0;
choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        console.log(userChoice);
       game(userChoice);
    })
});

const game = (userChoice)=>{
    console.log(`user choice is ${userChoice}`);
    let compChoice = botChoice();
    console.log(`bot choice is ${compChoice}`);
    if(userChoice == compChoice){
        gameDraw();
        console.log("Game draw")
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else{ //scissors
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
const showWinner = (userWin, userChoice, compChoice)=> {
    if(userWin){
        userScore++;
        userScoreCount.innerText = userScore ;
     msg.innerText = "You Win";
     msg.style.backgroundColor = "green";
      result.innerText = `${userChoice} beats ${compChoice}`
    } else{
        botScore++;
        botScoreCount.innerText = botScore ;
       msg.innerText = "You Loose";
     msg.style.backgroundColor = "red";
     result.innerText = `${compChoice} beats ${userChoice}`
    }
}
const botChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const botIdx = Math.floor(Math.random() * 3);
    return options[botIdx];
}
const gameDraw = ()=>{
    msg.innerText = "game draw.PLay again";
    msg.style.backgroundColor = "yellow";
    result.innerText = "DRAW";
}