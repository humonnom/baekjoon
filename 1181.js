const [count, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const sortAlphabetically = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return a.charCodeAt(i) - b.charCodeAt(i);
        }
    }
    return 0;
}

const sorted = input.sort((a, b) => {
    if (a.length === b.length) return sortAlphabetically(a, b);
    else return a.length - b.length
});

console.log([...new Set(sorted)].join('\n'));

/* another way to remove duplicates */
// console.log(sorted.filter(
//     (value, index, array) => array.indexOf(value) === index
// ).join('\n'));
