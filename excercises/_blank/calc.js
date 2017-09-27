function add(a, b) {
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b, c){
    return a / b / c;
}

function hybrid(a, b, c){
    return a * b / c;
}

function superman(a, b, c, d, e, f){
    return a + b - c / d * e / f;
}

module.exports = {
    add: add,
    sub: subtract,
    multiply: multiply,
    divide: divide,
    hy: hybrid,
    sup: superman
}