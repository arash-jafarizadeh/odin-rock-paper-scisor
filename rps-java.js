let humanScore = 0 
let computerScore = 0 


function getComputerChoice(){
            const choiceInt = Math.floor(Math.random() * 3)
            return (choiceInt == 0) ? "rock" : (choiceInt == 1) ? "paper" : "scissor";
        }

function getHumanChoice(){
    return prompt("rock, paper or scissor???");
}
        
function playGame(){
    let humanScore = 0 
    let computerScore = 0 

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
    alert(`Welcome, play 5 rounds of rock, paper scissor with me`)
    
    // while (humanScore < 1 && computerScore < 1) {
    //     let humanChoice = getHumanChoice();
    //     let computerChoice = getComputerChoice();
    //     playRound(humanChoice, computerChoice)
    // }
    
    // if (humanScore == 1) {
    //     console.log(`You won actually`)
    // } else {
    //     console.log(`You lost, better luck next time!`)
    // }
}

// console.log(playGame())

const uList = document.querySelector("ul");
const input = document.querySelector("input");
const btn =  document.querySelector("button");