
function addition(number1,number2) {
        return number1 + number2 
    };

function multiply(number1,number2){
    return number1 * number2;
};

function divide(number1,number2){
    return  number1 / number2;
};

function subtract(number1,number2){
    return number1-number2;
};


var readline = require("readline-sync")
var number1 = readline.question("Give me a numbers to add :)")
var number2 = readline.question("Give me a numbers to add :D")
var options = readline.question("Did you want to use addition, subtraction, multipliction, or division?")
function result (){
if(options === "addition"){
        return addition(number1,number2);
    } else if(options === "division"){
        return divide(number1,number2);
    }else if(options === "subtract"){
        return subtract(number1,number2) ;
    }else if(options === "multiply"){
        return multiply(number1,number2);
    }else{
        return ("thanks baby girl");
}};
console.log(result());


    