var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ');
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function caeser(input) {

   var characters = input.split("");

   return characters.map(function (letter) {
        letter = letter.charCodeAt();

       if (letter >= 97 && letter <= 109) {
            letter += shift;
        } else if (letter >= 110 && letter <= 122) {
            letter -= shift;
        } else if (letter >= 65 && letter <= 77) {
            letter += shift;
        } else if (letter >= 78 && letter <= 90) {
            letter -= shift;
        }

       return String.fromCharCode(letter);
    }).join("");
}

console.log(caeser(input, shift));







//
//function addition(number1,number2) {
//        return number1 + number2 
//    };
//
//function multiply(number1,number2){
//    return number1 * number2;
//};
//
//function divide(number1,number2){
//    return  number1 / number2;
//};
//
//function subtract(number1,number2){
//    return number1-number2;
//};
//
//
//var readline = require("readline-sync")
//var number1 = readline.question("Give me a numbers to add :)")
//var number2 = readline.question("Give me a numbers to add :D")
//var options = readline.question("Did you want to use addition, subtraction, multipliction, or division?")
//function result (){
//if(options === "addition"){
//        return addition(number1,number2);
//    } else if(options === "division"){
//        return divide(number1,number2);
//    }else if(options === "subtract"){
//        return subtract(number1,number2) ;
//    }else if(options === "multiply"){
//        return multiply(number1,number2);
//    }else{
//        return ("thanks baby girl");
//}};
//console.log(result());
