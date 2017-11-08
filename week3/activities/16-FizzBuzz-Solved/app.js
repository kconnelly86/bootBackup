// FizzBuzz Solution

// =================

// function fizzBuzz() {

//   // Loop 100 times, starting from the number 1
//   for (var i = 1; i <= 100; i++) {

//     // If divisible by 3 and 5,

//     if (i % 3 === 0 && i % 5 === 0) {

//       // print FizzBuzz.
//       console.log("FizzBuzz");

//     }//ends if

//     // If divisible by 3,
//     else if (i % 3 === 0) {

//       // print Fizz.
//       console.log("Fizz");

//     }//ends above else if

//     // If divisible by 5,
//     else if (i % 5 === 0) {

//       // print Buzz.
//       console.log("Buzz");

//     }//ends above else if

//     // If not divisible either 3 or 5,
//     else {

//       // just print the number.
//       console.log(i);
//     }//ends else
//   }//ends for loop
// }//ends function

// fizzBuzz();


function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 ===0) {
      //print fizzBuzz
      console.log("fizzBuzz");
    }//end of if statement
    else if (i % 3 === 0) {
      console.log("fizz");
    }//ends else if above
    else if (i % 5 === 0) {
      console.log("buzz");
    }//ends else if above
    else{
      console.log(i);
    }//ends else
  }//ends for loop
}//ends function
fizzBuzz();
