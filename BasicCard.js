//require packages
var fs = require("fs");

//Basic Card Constructor
var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
};	

//add create method to prototype
BasicCard.prototype.create = function() {
	var info = "\n" + "Front: " + this.front + "\nBack: " + this.back + "\n";

	fs.appendFile("test.txt", info);
};

module.exports = BasicCard;