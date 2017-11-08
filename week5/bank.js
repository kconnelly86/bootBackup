// expression is [1]
//withdraw, deposit and lotto are appends
var fs = require("fs");
var operation = process.argv[2];
var value = process.argv[3];

switch (operation){
	case "total":
	fs.readFile("bank.txt", "utf8", function(error, data) {
		if (error) {
   		  return console.log(error);
  		}

  		console.log(data);

  		var dataArr = data.split(",");

  		var total = 0;

  		for (var i = 0; i < dataArr.length; i++)

	};
	// console.log("ziii");
}
