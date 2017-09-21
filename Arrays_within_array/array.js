var readlineSync = require("readline-sync");


function createArray(amount) {
   var arr = [];
    
    for (var i = 0; i < amount; i++) {
        var zeros = [];
    for (var j = 0; j < amount; j++) {
         zeros.push(0);
    }
      arr.push(zeros);
    }
    return arr;
}
var grid = createArray(5);

console.log(grid);

var x = parseInt(readlineSync.question("Enter x: ")) - 1;
var y = parseInt(readlineSync.question("Enter y: ")) - 1;

grid[x][y] = 2;

console.log(grid);




//i need to implement a while loop and then have it kick out at some point.

