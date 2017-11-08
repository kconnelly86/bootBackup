var stuffINeed = require("./bands.js");
	// console.log( stuffINeed);

	for (var key in stuffINeed) {
		// console.log(key);
		// console.log(stuffINeed[key]);
    if (stuffINeed.hasOwnProperty(key)) {
        console.log(key + "band is " + stuffINeed[key]);
    }
}
