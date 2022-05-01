const userChoiceDisplay = document.createElement('h1');
const aiChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const gameGrid = document.getElementById('game');

gameGrid.append(
	userChoiceDisplay,
	aiChoiceDisplay,
	resultDisplay
	);
	
const choices = ['rock', 'paper', 'scissors'];

let userChoice;
let aiChoice;

const handleClick = (e) => {
	userChoice = e.target.id;
	userChoiceDisplay.innerHTML = "You Chose: " + userChoice;
	generateAiChoice();
	getResult();
}

const generateAiChoice = () => {
	const randomChoice = choices[Math.floor(Math.random() * choices.length)];
	aiChoice = randomChoice;
	aiChoiceDisplay.innerHTML = "AI Chooses: " + randomChoice;
}

for (let i = 0; i < choices.length; i++) {
	const button = document.createElement('button');
	button.id = choices[i];
	button.innerHTML = choices[i];
	button.addEventListener('click', handleClick);
	gameGrid.appendChild(button);
}

const getResult = () => {
	switch (userChoice + aiChoice) {
		case 'scissorspaper':
			resultDisplay.innerHTML = "YOU WIN!";
			break
		case 'scissorsrock':
			resultDisplay.innerHTML = "YOU LOOSE!";
			break
		case 'paperrock':
			resultDisplay.innerHTML = "YOU WIN!";
			break
		case 'paperscissors':
			resultDisplay.innerHTML = "YOU LOOSE!";
			break
		case 'rockpaper':
			resultDisplay.innerHTML = "YOU LOOSE!";
			break
		case 'rockscissors':
			resultDisplay.innerHTML = "YOU WIN!";
			break
		case 'rockrock':
			resultDisplay.innerHTML = "DRAW!";
			break
		case 'paperpaper':
			resultDisplay.innerHTML = "DRAW!";
			break
		case 'scissorsscissors':
			resultDisplay.innerHTML = "DRAW!";
			break
	}
}
