const start = process.hrtime();
const [count, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


//          f        b
//  pop <= [1][2][3][4] <= push

/* input */
// 15
// push 1
// push 2
// front
// back
// size
// empty
// pop
// pop
// pop
// size
// empty
// pop
// push 3
// empty
// front


class Queue {
    queue = [];
    result = [];

    get result() {
        return this.result;
    }

    push(value) {
        this.queue.push(value);
    }

    pop() {
        this.result.push(this.queue.shift() ?? -1);
    }

    empty() {
        this.result.push(Number(!this.queue.length));
    }

    size() {
        this.result.push(this.queue.length);
    }

    front() {
        this.result.push(this.queue.length ? this.queue[0] : -1);
    }

    back() {
        this.result.push(this.queue.length ? this.queue[0] : -1);
    }
}

const q = new Queue();

const calc = (command, value) => {
    switch (command) {
        case 'push':
            return q.push(value);
        case 'pop':
            return q.pop();
        case 'size':
            return q.size();
        case 'empty':
            return q.empty();
        case 'front':
            return q.front();
        case 'back':
            return q.back();
    }
}

for (let i = 0; i < count; i++) {
    calc(...input[i].split(' '));

}

console.log(q.result.join('\n'));
const end = process.hrtime(start);
console.log(end[0] * 1000 + end[1] / 1000000); // 시간(ms)으로 변환

