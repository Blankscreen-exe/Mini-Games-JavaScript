//Both player choices display variables
const aiChoiceDisplay = document.getElementById("ai-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
//choice variable
let playerChoice;
let aiChoice;
let result;
//result display varaible
const resultDisplay = document.getElementById("result-disp");
//possible choices variable
const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach( possibleChoice => possibleChoice.addEventListener( 'click', (e) => {
	playerChoice = e.target.id;
	playerChoiceDisplay.innerHTML = playerChoice;
	generatecomputerChoice();
	getResult();
	} ) );

function generatecomputerChoice() {
	const randomNumber = Math.floor( Math.random() * possibleChoices.length ) + 1;
	// console.log( randomNumber );
	if (randomNumber === 1) {
		aiChoice = 'Rock';
	}
	if (randomNumber === 2) {
		aiChoice = 'Paper';
	}
	if (randomNumber === 3) {
		aiChoice = 'Scissor';
	}
	aiChoiceDisplay.innerHTML = aiChoice;
}

function getResult() {
	if (aiChoice === playerChoice){
		result = 'Draw!';
	}
	if (aiChoice === 'Rock' && playerChoice === 'Paper'){
		result = 'Win!';
	}
	if (aiChoice === 'Rock' && playerChoice === 'Scissor'){
		result = 'Lose!';
	}
	if (aiChoice === 'Paper' && playerChoice === 'Rock'){
		result = 'Lose!';
	}
	if (aiChoice === 'Paper' && playerChoice === 'Scissor'){
		result = 'Win!';
	}
	if (aiChoice === 'Scissor' && playerChoice === 'Rock'){
		result = 'Win!';
	}
	if (aiChoice === 'Scissor' && playerChoice === 'Paper'){
		result = 'Lose!';
	}
	resultDisplay.innerHTML = result;
}
