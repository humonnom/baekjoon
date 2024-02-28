// 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개
// 1 1 2 2 2 8
// 0 1 2 2 2 7

const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const correct = [1, 1, 2, 2, 2, 8];

let result = '';

for (let i = 0; i < input.length; i++) {
    result += (correct[i] - input[i] + ' ')
}

console.log(result.trim());
