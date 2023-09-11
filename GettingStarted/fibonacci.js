let prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the fibonacci numbers to print: "));

let a = 0;
let b = 1;
for(let i = 1; i <= n; i++) {
    let c = a + b;
    console.log(a);
    a = b;
    b = c;

}
