var fs = require("fs");
fs.readFile("best_things_ever.txt", "utf8", function(error, data){
	if (error) {
		return console.log(error);
	}
	var daSplit = data.split(",");

	for (var i =0; i <=daSplit.length; i++){
		console.log(daSplit[i]);
	}
});