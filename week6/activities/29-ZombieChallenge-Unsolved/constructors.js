// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function () {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hp = hp ;
//needed to put into console.log
  this.PrintStats = function() {
    console.log(name);
    console.log(profession);
    console.log(gender);
    console.log(age);
    console.log(strength);
    console.log(hp);
    this.IsAlive = function() {
      if (Character )
    console.log(this)
}
  };


}
var kyle = new Character("kyle", "student", "male", 30, 10, 1);
var paul = new Character("paul", "boss", "male", 24, 10, 1);

kyle.PrintStats();
paul.PrintStats();


// // sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
// var dogs = new Animal(true, "Woof!");
// var cats = new Animal(false, "Meow!");

// // calling dogs and cats makeNoise methods
// dogs.makeNoise();
// cats.makeNoise();

// // if we want, we can change an objects properties after they're created
// cats.raining = true;
// cats.makeNoise();

// var massHysteria = function(dogs, cats) {
//   if (dogs.raining === true && cats.raining === true) {
//     console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
//   }
// };

// massHysteria(dogs, cats);
