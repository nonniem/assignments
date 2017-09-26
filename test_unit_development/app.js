function assert(actual, expected){
    if (actual !== expected){
        throw "Failed";
    } else {
        console.log("test passed.");
    }
}

function add(a, b){
    return a + b;
}

assert(1,1);
assert(true, true);
assert("a", "a");


assert(add(a,b), 3);