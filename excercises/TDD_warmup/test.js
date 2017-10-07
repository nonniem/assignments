
function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function sub(a, b){
    return a - b;
}

var describe = function(message, testFunc){
    try {
        testFunc();
    } catch(err) {
        console.error("failure", err);
    }
};

var assert = function(actual, expected) {
    if(actual !== expected) {
        throw {type: "fail", details: {actual:actual, expected: expected}}
     } else {
         console.log("Success", {type: "test passed", details: { actual: actual, expected: expected}});
     }
}

describe("Test group", function(){
    assert(add(1, 2), 3)
    assert(multiply(2, 6), 12)
    assert(divide(9, 3), 3)
    assert(sub(900, 700), 200)
});

