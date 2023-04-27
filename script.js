// Binary Addition
function addBinary(a,b) {
    return (a+b).toString(2)
}

function addBinary1(a,b) {
    var sum = a + b, binary = ''; while ( sum > 0 ) { binary = ( sum % 2 ) + binary; sum = Math.floor( sum / 2 ); } return binary;
}

// Descending Order
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

function descendingOrder1(n){
    let decend = n.toString().split('').sort().reverse().join('');
    return Number(decend)
}

// Testing 1-2-3
function number(array){
    return array.map(function (line, index) {
        return (index + 1) + ": " + line;
    });
}

function number1(array){
    let newArray = [];
    if (array.length === 0) {
        return [];
    } else {
        for (let i = 0; i < array.length; i++){
            newArray.push((i + 1) + ": " +array[i]);
        }
    }
    return newArray
}

// Exes and Ohs
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
const XO1 = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

// Vowel Count
function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}

function getCount1(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}