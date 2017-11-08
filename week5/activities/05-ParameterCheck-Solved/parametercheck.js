// Solution 1 - More Obvious
// process.argv is the array, the command "node calculator.js 3 3" is the array that process.argv operates with, saying that in the process that is node calculator.js 3 3 that index[0] is node and calculator is [1], and so on. 
var a = process.argv[2];
var b = process.argv[3];

if (a === b) {
  console.log(true);
}
else {
  console.log(false);
}


// Solution 2 - Simplified (Re-factored)
console.log(process.argv[2] === process.argv[3]);
