// 1 2
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const [A, B] = input.split(' ').map(s => parseInt(s));
console.log(A+B);
