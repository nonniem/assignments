const chai = require("chai");
const assert = chai.assert;

const gameof3 = require("../App.js");

const tests = {
  case0: 1,
  case1: 3,
  case2: 10,
  case3: 28
}

describe("game of threes test", ()=>{
  it("should return 0", ()=>{
    assert.equal(gameof3(tests.case0), 0);
  });
  it("should return 1", ()=>{
    assert.equal(gameof3(tests.case1), 1);
  });
  it("should return 2", ()=>{
    assert.equal(gameof3(tests.case2), 2);
  });
  it("should return 3", ()=>{
    assert.equal(gameof3(tests.case3), 3);
  });
})
