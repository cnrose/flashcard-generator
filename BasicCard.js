//require packages
var fs = require("fs");

//Basic Card Constructor
var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
};	

//add create method to prototype
BasicCard.prototype.create = function() {
	var info = "\n" + "Type: Basic" + "\nFront: " + this.front + "\nBack: " + this.back + "\n";
	console.log(info);
	fs.appendFile("basiclog.txt", info);
};

module.exports = BasicCard;