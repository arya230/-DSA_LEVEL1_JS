var prompt = require("prompt-sync")();
//parseInt is used to convert string received from prompt to integer
let low = parseInt(prompt("Enter the lowest number: "));
console.log(low);
let high = parseInt(prompt("Enter the highest number: "));
console.log(high);
for(let n = low; n <= high; n++) {
    let count = 0;
    for(let div = 2; div * div <= n; div++) {
        if(n % div == 0) {
            count++;
            break;
        }
    }
    if(count == 0) {
        console.log(n);
    }
}