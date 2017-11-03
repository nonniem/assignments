const chai = require("chai");
const assert = chai.assert;
const difference = require('../main.js');

const tests = {
    test0: [1,2,3,1,2,3,4],
    test1: [1,2,3,2,3,4]
    test2: [0, 1 ,2, 1 ,0]
}

describe("difference", ()=>{
    it("should return an obj with the vowels and constants seperated", ()=>{
        assert.deepEqual(disemvowel(tests.case0), {str: "tstsntnc", vowels: "eeee"})
    })
    it("should return an obj with the vowels and constants seperated", ()=>{
        assert.deepEqual(disemvowel(tests.case1), {str: "pcklrck", vowels: "iei"})
    })
})
