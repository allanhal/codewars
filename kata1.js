// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript
const tests = [
    [0],
    [0, 1, 3, 6, 10],
    [0, 1, 3, 6, 10, 1, 3, 6, 10],
    [0, 1, 1, 3, 6, 10, 3, 6, 10],
    [1, 3, 6, 10, 0, 1, 3, 6, 10],
    [0, 1, 3, 6, 1, 3, 6, 10, 10],
    [1, 2, 3, 4, 5, 6],
    [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358],
    [1, 2],
    [1, 1, 1, 1, 1, 1],
    [],
]

const partsSums = (ls) => {
    let toReturn = []
    toReturn.push(ls.reduce((a, b) => a + b, 0))
    if (ls.length === 0) {
        return toReturn
    } else {
        toReturn = toReturn.concat(partsSums(ls.slice(1)))
    }
    return toReturn
}

tests.forEach(testElement => {
    console.log(partsSums(testElement))
});
