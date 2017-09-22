//var readlineSync = require("readline-sync");
//
//
//function createArray(amount) {
//   var arr = [];
//    
//    for (var i = 0; i < amount; i++) {
//        var zeros = [];
//    for (var j = 0; j < amount; j++) {
//         zeros.push(0);
//    }
//      arr.push(zeros);
//    }
//    return arr;
//}
//var grid = createArray(5);
//
//console.log(grid);
//
//var x = parseInt(readlineSync.question("Enter x: ")) - 1;
//var y = parseInt(readlineSync.question("Enter y: ")) - 1;
//
//grid[x][y] = 2;
//
//console.log(grid);
//
//
//
//
////i need to implement a while loop and then have it kick out at some point.



//erics start
//var readline = require("readline-sync");
//
//var fastFoods = ["fruit", "quinoa", "stevia", "i Phone X"];
//
//var indexOfItem = readline.keyInSelect(fastFoods, "Which hipster item would you like to buy? ");
//
//console.log("you have purchased the " + fastFoods[indexOfItem]);

//write a while loop. do not declare any functions inside of it.



//   another one of erics functions
if(generateRandomNumber(1, 4) === 1){
    console.log("you win!")
}

function generateRandomNumber(min, max){
    return Math.floor((Math.random() * max) + min);
}