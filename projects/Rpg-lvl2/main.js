
//erics start
//var readline = require("readline-sync");
//
//var fastFoods = ["fruit", "quinoa", "stevia", "i Phone X"];
//
//var indexOfItem = readline.keyInSelect(fastFoods, "Which hipster item would you like to buy? ");
//
//console.log("you have purchased the " + fastFoods[indexOfItem]);

//write a while loop. do not declare any functions inside of it.



//   another one of erics functions   different ways to write similar concepts.
//if(generateRandomNumber(1, 4) === 1){
//    console.log("you win!")
//}
//
//function generateRandomNumber(min, max){
//    return Math.floor((Math.random() * max) + min);
//}

console.log(generateRandomNumber(4, 6))

function generateRandom Number(min, max){
    return Math.floor(Math.random()* (max-min) + min);
}
//



//good beginning for the project. created in class. dont have to use but could be a good reference point.
//var readlineSync = require("readline-sync");
//var inventory = [];
//
//function walk(){
//    var options = ["walk", "check inventory"];
//    var option = readlineSync.keyInSelect(options, "What would you like to do? ");
//    if (option === 0){
//        whatHappenOnOurWalk();
//    } else {
//        checkInventory();
//    }
//}
//
//function whatHappenOnOurWalk(){
//    console.log("walk");
//}
//
//function checkInventory(){
//    console.log(inventory);
//}
//
//while(true){
//    walk();
//}
