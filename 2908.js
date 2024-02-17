// 734 893

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const [first, second] = input
    .split(" ")
    .map(str => str.split("").reverse().join(""));

console.log(Math.max(first, second));
