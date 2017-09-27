//good beginning for the project. created in class. dont have to use but could be a good reference point.
var readlineSync = require("readline-sync");
var name = readlineSync.question("Welcome to my RPG, Please state your name.")
var inventory = ["Potato"];
var health = 99;


var characters = [
    {
        name: "King Kong",
        weapon: "Banana"
    },
    {
        name: "Tupac",
        weapon: "Glock"
    },
    {
        name: "T-rex",
        weapon: "Tiny Arms"
    }
]


var enemies = [
    {
        name: "Lex Luther",
        power: "95"
    },
    {
        name: "Holly Berry",
        power: "81"
    },
    {
        name: "Chuck E Cheese",
        power: "99"
    }
];   // object within an array randomly choose



function percentage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function walk() {
    var options = ["Go into the Abyss", "Check your inventory"];
    var option = readlineSync.keyInSelect(options, "What would you like to do? ");
    if (option === 1) {
        goIntoTheAbyss();
    } else {
        checkInventory();
    }
}

function run() {
    var runs = ["walk", "Continue to hyperventilate"]
    var runner = readlineSync.keyInSelect(runs, "Are you sure you have the cardio for this? I thought you were a smoker!");
    if (runs === 1) {
        walk();
    } else {
        hyperventilate();
    }
}

function goIntoTheAbyss() {
    var choices = ["Castle", "Woods"]
    var choice = readlineSync.keyInSelect(choices, "Are you ready for your journey? Do you want to go into the castle or would you like to go into the woods?");
    if (choices === 1) {
        castle();
    } else {
        woods();
    }
}

function castle() {
    var castles = ["Battle", "run"]
    if (percentage(1, 4) === 1) {
        var castled = readlineSync.keyInSelect(castles, "The king greets you with love and compassion, but he saw you look at his daughter and tensions rise. Battle?");
        if (castles === 1) {
            battle();
        } else {
            run();
        }
    } else {
        console.log("you're good!")
    }
}

function woods() {
    var wooded = ["Go to the Castle", "Run!"];
    var wood = readlineSync.keyInSelect(wooded, "Idk why were in the woods, i want some snacks. lets head to the castle.");
    if ( === 1) {
        castle();
    } else {
        run();
    }
}

function hyperventilate() {
    var hyperventilated = ["Drink Water of Life", "Don't move and die"];
    var hyperventinlating = readlineSync.keyInSelect(hyperventilated, "You get overly tired and pass out in a feild. You can drink the Water Of Life, or die right here on the ground. Choose your fate.");
    if (hyperventilated === 1) {
        WOL();
    } else {
        death();
    }
}

function death(){
    console.log("good game m8. better luck next time..")
    
}

function WOL() {
    var waterOfLife = ["Go with the fairy", "Fight!"];
    var waterOflifed = readlineSync.keyInSelect(waterOfLife, "You have drank the magical water! A fairy has appeared and wants to take you to her home. But you arent sure! do you want to fight or go with her.")
    if (waterOfLife === 1) {
        ();
    } else {
        battle();
    }
}

function battle(){
   var champ = characters.map(function(character){
        return character.name;
        return character.power;
})
    var battled = readlineSync.keyInSelect(champ, "Choose your champion!")
        
}

function attack(){
        if (randomNum(1, 2) === 1) {
            console.log("Ya slayed em"); 
                enemyAttack(); 
        } else {
            console.log("You slipped and the enemy started laughing. He let you go!"), 
                enemyRun();
        }
    }



function checkInventory() {
    console.log(inventory);
}

while (true) {
    walk();
}









//you will start the game and load in.
//youll choose what youd like to do first, you can go into the abyss or check your inventory.
//if you check your inventory, you will loop back to the beginning and then go into the abyss
//youll have two choices, you can go into the castle or the woods
//if you go into the woods you'll end up back in the castle where you'll fight.
// you will get to choose which champion youd like to fight with and then you are randomly given an enemy to fight.
//













//console.log("checkInventory");
//


//    if where === ""
//        var choice = readlineSync.keyInSelect(choices, "Are you ready for your journey? Do you want to go into the castle or would you like to go into the woods?");
//    else if where === "castle"
//    else if where === "woods"
//        



//
//
//var readline = require("readline-sync");
//var name = readline.question("What is your name? ");
//var index = ("");
//var options = ['Check inside the hole in the wall', 'Look around for key', 'Open the door']
//
//
//
//while (index !== 0, index !== 2) {
//    var index = readline.keyInSelect(options, 'Which option?')
//    if (index === 0) {
//        console.log("You were shot. Instantly. It went through your L1 vertebre. Dead")
//        break;
//    } else if (index === 1) {
//        console.log("You found the key! Goodjob")
//    } else if (index === 2) {
//        console.log("You need to find the key first.")
//        break;
//    };
//
//    if (readline.keyInYN("Would you like to open the door?") === true) {
//        console.log("Welcome back to earth " + name)
//        
//    } else {
//        console.log("I didn't want you to open the door anyways.")
//        break;
//    }
//      
//    var escape = readline.question("Choose your escape vehicle! ")
//        console.log("Alright " + name + " lets roll out in the " + escape)
//        break;
//    }
//;
