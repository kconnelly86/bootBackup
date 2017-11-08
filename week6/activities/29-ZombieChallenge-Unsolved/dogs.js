// Make a dogs object with three keys...
// First key called "raining" with a value of true
// Second key called "noise" with a value of "Woof!"
// Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs
// Make a cats object with three keys...
// First key called "raining" with a value of false
// Second key called "noise" with a value of "Meow!"
// Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats
// Make the dog bark
// Make the cat meow


var dogs = {
	raining: true,
	noise: "woof",
	makeNoise:
		function(){
			console.log(dogs.noise);
		}

	}
dogs.makeNoise();

var cats = {
	raining: true,
	noise: "meow",
	makeNoise:
		function(){
			console.log(cats.noise);
		}

	}
cats.makeNoise();

