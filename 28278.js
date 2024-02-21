// 9
// 4
// 1 3
// 1 5
// 3
// 2
// 5
// 2
// 2
// 5

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [count, ...items] = input;
let result = '';
const stack = [];

for (let i = 0; i < Number(count); i++) {
    const [command, value] = items[i].split(' ').map(Number);

    switch (command) {
        case(1):
            stack.push(Number(value));
            break;
        case(2):
            result += (stack.pop() ?? -1).toString() + '\n';
            break;
        case(3):
            result += stack.length + '\n';
            break;
        case(4):
            result += (Number(!Boolean(stack.length))).toString() + '\n';
            break;
        case(5):
            result += (stack.length ? stack.at(stack.length - 1) : -1).toString() + '\n';
            break;
    }
}

console.log(result);