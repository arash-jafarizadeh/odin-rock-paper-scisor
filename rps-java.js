
let humanScore = 0 
let computerScore = 0 

function getComputerChoice(){
    const choiceInt = Math.floor(Math.random() * 3)
    return (choiceInt == 0) ? "rock" : (choiceInt == 1) ? "paper" : "scissor";
}

function getHumanChoice(){
    return prompt("rock, paper or scissor???");
}

function playRound( humanChoice, computerChoice ){            
    console.log(`You selected ${humanChoice.toLowerCase()} and machine selected ${computerChoice}`)
    if (humanChoice === computerChoice) {
        // message = `Draw! Both chose ${playerChoice}.`;
        console.log(`It's a draw, no one wins!`)
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        // message = `You win! ${playerChoice} beats ${computerChoice}.`;
        console.log(`You win, ${humanChoice.toLowerCase()} beats ${computerChoice}`)
    } else {
        // message = `You lose! ${computerChoice} beats ${playerChoice}.`;
        console.log(`You lose, ${computerChoice} beats ${humanChoice.toLowerCase()}`)
    }       
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

let humanChoice = ""

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");

rockButton.addEventListener("click", function (e) {
    humanChoice = "rock"
    console.log(humanChoice)
});

paperButton.addEventListener("click", function (e) {
    // e.target.style.background = "blue";
    humanChoice = "paper"
    console.log(humanChoice)
});


scissorButton.addEventListener("click", function (e) {
    humanChoice = "scissor"
    console.log(humanChoice)
});

// let test1 = document.getElementsByClassName("paper")
// console.log(test1)

// let test2 = document.querySelector("rock")
// console.log(test2)
// test2.addEventListener("click", function (event) {
    //     console.log(event);
// });
    
// const btn =  document.querySelectorAll("button");
// console.log(btn)

// const uList = document.querySelector("ul");
// const btn =  document.querySelector("button");
// btn.addEventListener("click", function (e) {
//       console.log(e.target.tagName);
//       console.log(e.button);
// });

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