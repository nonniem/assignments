let chai = require("chai");
let assert = chai.assert;

let balancedParens = require("../squak.js")

describe("Test Group", function(){
  it("should test as described", () => {
    assert.isNotTrue(balancedParens('('));
    assert.isTrue(balancedParens('()')); // true
    assert.isNotTrue(balancedParens(')('));  // false
    // assert(balancedParens('(())'));  // true
    // assert(balancedParens('[](){}')); // true
    // assert(balancedParens('[({})]'));   // true
    // assert(balancedParens('[(]{)}')); // false
    // assert(balancedParens('var supYo  = { hey: dog() }')); // true
    // assert(balancedParens('var fiddle = function() { doggy.eat();')); // false
  })
});
