const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number: "));
let temp = n;
let nod = 0;
while(temp > 0) {
    temp = Math.floor(temp / 10);
    nod++;
}
console.log(nod);
let div = Math.pow(10, nod - 1);
console.log(div);
while(div > 0) {
    let ans = Math.floor(n / div);
    console.log(ans);
    n = Math.floor(n % div);
    div = Math.floor(div / 10); 
}

