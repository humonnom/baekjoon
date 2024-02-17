//Sprout
//3

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const [word, position] = input.split('\n')
console.log(word.at(position-1))
