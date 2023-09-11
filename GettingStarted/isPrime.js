var prompt = require("prompt-sync")();
//parseInt is used to convert string received from prompt to integer
let t = parseInt(prompt("Enter the no of values to be input: "));
for(let i = 1; i <= t; i++) {
    let n = parseInt(prompt("Enter the number: "));
    let isPrime = true;
    for(let div = 2; div * div <= n; div++) {
        if(n % div == 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime == true) {
        console.log("Prime Number");
    }
    else {
        console.log("Not A Prime Number");
    }

}
