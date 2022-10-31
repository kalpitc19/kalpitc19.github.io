const playerText=document.querySelector("#playerText");
const computerText=document.querySelector("#computerText");
const resultText=document.querySelector("#resultText");
const choiceBTNs=document.querySelectorAll(".choiceBTN");
let player;
let total=0;
let computer;
let wicket=0;

choiceBTNs.forEach(button => button.addEventListener("click",() => {
    player=parseInt(button.value);
    computerTurn();
    playerText.textContent = `On this ball: ${checkWinner()}`;
    computerText.textContent = `computer chose: ${computer}`;
    resultText.textContent = `Result: ${res()} in ${wicket} wickets`;
    if(wicket>=10){
        alert("you scored: "+ total)
        playerText.textContent = `On this ball: 0`;
        computerText.textContent = `computer chose: 0`;
        resultText.textContent = `Result: 0 in 0 wickets`;
        wicket=0;
        total=0;
    }
}));

function computerTurn() {
    const randnum= Math.floor(Math.random() * 5)+1;

    switch(randnum){
        case 1:
            computer= 1;
            break;
        case 2:
            computer= 2;
            break;
        case 3:
            computer= 3;
            break;
        case 4:
            computer= 4;
            break;
        case 5:
            computer= 6;
            break;
    }
}
function checkWinner(){
    if(player==computer){
        wicket=wicket+1;
        player=0;
        return "OUT!!"
    }
    else {
        return player
    }
}
function res(){
        total=total+player;
        return total;   
}
