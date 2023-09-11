const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter the number: "));
let count = 0;
while(n > 0) {
    n = Math.floor(n / 10);
    count++;

}
console.log(count);

// n1 = 2344578/100000;
// console.log(n1);
