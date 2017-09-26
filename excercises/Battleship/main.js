function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isShip() {
    var random = getRandomInt(1, 5);
    return random === 5;
}

function Location() {
    this.isShip: isShip();
    this.hit: false;
    this.display: "~";
}

function makeGrid(){
var grid = [];
    for (var i = 0;i < 10; i++){
        var row = [];
        for (var j = 0; j < 10; j++){
            var newLocation = new Location();
            row.push(newLocation);
        }
        grid.push(row)
    }
    return grid;
}
        var grid = makeGrid();
    console.lastIndexOf(grid);


function userGuess() {
var y = parseInt(readline.question("Gimme an y coradinate: "));
var x = parseInt(readline.question("Gimme a x cordinate: "))
var guess = grid[x][y];
    return guess.isShip;
}


console.log(guess);


//loop 10 times 
    //new row
    //loop 10 times
    //create new location
//  push location to the row
//push the row to a griw
