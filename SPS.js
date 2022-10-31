const playerText=document.querySelector("#playerText");
const computerText=document.querySelector("#computerText");
const resultText=document.querySelector("#resultText");
const choiceBTNs=document.querySelectorAll(".choiceBTN");
let player;
let computer;
let result;

choiceBTNs.forEach(button => button.addEventListener("click",() => {
    player=button.value;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `AI: ${computer}`;
    resultText.textContent = `Result: ${checkWinner()}`;
}));

function computerTurn() {
    const randnum= Math.floor(Math.random() * 3)+1;

    switch(randnum){
        case 1:
            computer= "ROCK";
            break;
        case 2:
            computer= "PAPER";
            break;
        case 3:
            computer= "SCISSOR";
            break;
    }
}
function checkWinner(){
    if(player==computer){
        return "DRAW!!"
    }
    else if(computer=="ROCK"){
        return (player=="PAPER")?"YOU WIN": "YOU LOSE!"
    }
    else if(computer=="PAPER"){
        return (player=="SCISSOR")?"YOU WIN": "YOU LOSE!"
    }
    else if(computer=="SCISSOR"){
        return (player=="ROCK")?"YOU WIN": "YOU LOSE!"
    }
} 