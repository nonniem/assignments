var chai = require("chai");
var assert = chai.assert;

var calculator = require("../calc.js");
var twonums = require("../lastnums.js")

describe("A calculator", function () {

    it("should add two numbers", function () {
        assert.equal(calculator.add(1, 2), 3);
        assert.equal(calculator.add(-2, -9), -11);
    });

    it("should subtract two numbers", function(){
        assert.equal(calculator.sub(2, 1), 1);
        assert.equal(calculator.sub(99, 80), 19);
    });
    
    it("should multiply two numbers", function(){
        assert.equal(calculator.multiply(2, 5), 10);
        assert.equal(calculator.multiply(18, 2), 36);
        assert.equal(calculator.multiply(99, -1), -99);
    });
    
    it("should divide three numbers", function(){
        assert.equal(calculator.divide(10, 2, 5), 1);
        assert.equal(calculator.divide(100, 2, 25), 2);
        assert.equal(calculator.divide(190000, 95, 200), 10)
    });
    
    it("should multiply a & b then divide the total", function(){
        assert.equal(calculator.hy(2, 100, 2), 100);
        assert.equal(calculator.hy(19, 20, 20), 19);
    });
    
    it("it should add a & b then subtract c divide the new total by d multiply it by e then divide by f", function(){
       assert.equal(calculator.sup(1, 3, 2, 2, 10, 5), 2) 
    });
    
});


describe("lastNums", function () {
    
    it("should tell us if the last number for each arguement is the same. if it is it will return true. if not it should return false", function(){
        assert.isTrue(lastNums(4008, 4008));
        assert.isFalse(lastNums(101, 11))
    });
    
});


