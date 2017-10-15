

var balancedParens = function(str) {
  var stack = [];
  var open = { '{': '}', '[': ']', '(': ')' };
  var closed = { '}': true, ']': true, ')': true };

    
var describe = function(message, testFunc){
    try {
        balancedParens();
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


  for (var i = 0; i < str.length; i ++) {
    var chr = str[i];
    if (open[chr]) {
      stack.push(chr);
    } else if (closed[chr]) {
      if (open[stack.pop()] !== chr) return false;
    }
  }

  return stack.length === 0;
};


describe("Test Group", function(){
    assert(balancedParens('('));  // false
    assert(balancedParens('()')); // true
    assert(balancedParens(')('));  // false
    assert(balancedParens('(())'));  // true
    assert(balancedParens('[](){}')); // true
    assert(balancedParens('[({})]'));   // true
    assert(balancedParens('[(]{)}')); // false
    assert(balancedParens('var supYo  = { hey: dog() }')); // true
    assert(balancedParens('var fiddle = function() { doggy.eat();')); // false
    });

