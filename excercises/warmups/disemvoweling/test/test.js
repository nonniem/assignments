const chai = require("chai");
const assert = chai.assert;
const disemvowel = require("../App.js");
const stringifyURL = require("../App.js");

const tests = {
    case0: "testsentence",
    case1: "picklerick"
}

describe("disemvowel", ()=>{
    it("should return an obj with the vowels and constants seperated", ()=>{
        assert.deepEqual(disemvowel(tests.case0), {str: "tstsntnc", vowels: "eeee"})
    })
    it("should return an obj with the vowels and constants seperated", ()=>{
        assert.deepEqual(disemvowel(tests.case1), {str: "pcklrck", vowels: "iei"})
    })
})
