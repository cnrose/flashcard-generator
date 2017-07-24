var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var fs = require("fs");
var inquirer = require("inquirer");


inquirer.prompt([
	{
		type: "list",
		message: "What type of card are you creating?",
		choices: ["Basic Flashcard", "Cloze Flashcard"],
		name: "cardType"
	}
])
.then(function(inquirerResponse){
	if(inquirerResponse.cardType === "Basic Flashcard"){
		inquirer.prompt([
			{
				type: "input",
				message: "Please provide a question.",
				name: "question"
			},{
				type: "input",
				message: "Please provide the answer.",
				name: "answer"
			}
		])
		.then(function(cardResponse){
			var newBasicCard = new BasicCard(cardResponse.question, cardResponse.answer);
			newBasicCard.create();
			console.log("New basic card added.")
		})
	}
	else {
		inquirer.prompt([
			{
				type: "input",
				message: "Please provide a fact",
				name: "fact"
			},{
				type: "input",
				message: "What part of your fact do you want hidden?",
				name: "clozePart"
			}
		])
		.then(function(cardResponse){
			var newClozeCard = new ClozeCard(cardResponse.fact, cardResponse.clozePart);
			newClozeCard.create();
			console.log("New cloze card created.")
		});
	}
});	


