
let humanScore = 0 
let computerScore = 0 

let humanChoice = ""
// let computerChoice = ""
let message = ""

let rounds = 0;

const uList = document.querySelector("ul");

const rockBtn = document.getElementsByClassName("rock"); //document.querySelector("rock");
const paperBtn = document.getElementsByClassName("paper");
const scissorBtn = document.querySelector("#scissor");

rockBtn[0].addEventListener("click", () => {
    humanChoice = "rock"
    // console.log(humanChoice)
    // chooseRock();        
    playRound();
});

paperBtn[0].addEventListener("click", () => {
    humanChoice = "paper"
    // console.log(humanChoice)
    // chooseRock();        
    playRound();
});
    
scissorBtn.addEventListener("click", function (e) {
    humanChoice = "scissor"
    // console.log(humanChoice)
    playRound();
});


function getComputerChoice(){
    const choiceInt = Math.floor(Math.random() * 3)
    return (choiceInt == 0) ? "rock" : (choiceInt == 1) ? "paper" : "scissor";
}

// function getHumanChoice(){
//     return prompt("rock, paper or scissor???");
// }

function playRound( ){            
// function playRound( humanChoice, computerChoice ){            
    let computerChoice = getComputerChoice(); // computerChoice = getComputerChoice()
    // console.log(`You selected ${humanChoice} and machine selected ${computerChoice}`)
    if (humanChoice === computerChoice) {
        message = `Draw! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        message = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore += 1;
    } else {
        message = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore += 1;
    }       
    console.log(message)
    showResult(message)
    console.log(computerScore)
    console.log(humanScore)
}

function playGame(){
    let humanScore = 0 
    let computerScore = 0 

    alert(`Welcome, play 5 rounds of rock, paper scissor with me`)
    
    while (humanScore < 1 && computerScore < 1) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice)
    }
    
    if (humanScore == 1) {
        console.log(`You won actually`)
    } else {
        console.log(`You lost, better luck next time!`)
    }
}


// const btn =  document.querySelector("button");

// btn.addEventListener("click", (e) => {
//       console.log(e.target.tagName);
//     //   console.log(e.button);
//       console.log("btttn")
// });

function showResult(message){

    const listItem = document.createElement("li");
    const listSpan = document.createElement("span");

    listItem.appendChild(listSpan);
    listSpan.textContent =  message;

    uList.appendChild(listItem)

};

// const input = document.querySelector("input");

// btn.addEventListener("click", (event) => {

// event.preventDefault();

// const newItem = input.value;
// input.value = "";

// const listItem = document.createElement("li");
// const listSpan = document.createElement("span");
// const listBtn =  document.createElement("button");

// listItem.appendChild(listSpan);
// listSpan.textContent =  newItem;

// listItem.appendChild(listBtn);
// listBtn.textContent = "Delete";

// uList.appendChild(listItem)

// listBtn.addEventListener("click", () => {
//     uList.removeChild(listItem);
// });

// input.focus();

// });