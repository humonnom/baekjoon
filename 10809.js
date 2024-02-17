// baekjoon

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('');

const result = [];
'abcdefghijklmnopqrstuvwxyz'.split('').forEach((alphabet) => result.push(input.indexOf(alphabet)));

console.log(result.join(' '));
