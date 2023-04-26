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

