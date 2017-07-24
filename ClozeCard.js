//require npm package
var fs = require("fs");

//CLoze Card Constructor
var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = this.text.replace(this.cloze, "....");

	
};


ClozeCard.prototype.create = function() {
	
	var info = "\n" + "Type: Cloze" + "\nFull Text: " + this.text + "\nCloze: " + this.cloze + "\nPartial Text: " + this.partial  + "\n";
	

	if(this.text.includes(this.cloze)){
		console.log(info);
		fs.appendFile("clozelog.txt", info);
	} else {	
		return console.log("Oops! The full text does not include " + "'" + this.cloze + "'");
	};
};


module.exports = ClozeCard;