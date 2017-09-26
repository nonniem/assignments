//good beginning for the project. created in class. dont have to use but could be a good reference point.
var readlineSync = require("readline-sync");
//var characters =[
//    {name: "King Kong" weapon: "Banana"},
//    {name: "Tupac" weapon: "Glock"},
//    {name: "T-rex" Weapon: "Tiny Arms"}
//]
//
//var enemies = [
//    {name: "Lex Luther" Power:"95"},
//    {name: "Holly Berry" Style:"81"},
//    {name: "Chuck E Cheese" Cheesiness:"99"}
//]

var inventory = ["Potato"];

function walk(){
    var options = ["check inventory", "walk"];
    var option = readlineSync.keyInSelect(options, "What would you like to do? ");
    if (option === 1){
        goIntoTheAbyss();
    } else {
        checkInventory();
    }
}

function run(){
    var runs = ["Stop running", "Continue to hyperventilate"]
    var runner = readlineSync.keyInSelect(options, "Are you sure you have the cardio for this? I thought you were a smoker!");
     if (option === 1){
        stopRunning();
    } else {
        Hyperventilate();
    }
}

function goIntoTheAbyss(){
    var choices = ["Castle", "Woods"]
    var choice = readlineSync.keyInSelect(choices, "Are you ready for your journey? Do you want to go into the castle or would you like to go into the woods?");
     if (option === 1){
        castle ();
    } else {
        woods();
    }
    console.log("checkInventory");
    
//    if where === ""
//        var choice = readlineSync.keyInSelect(choices, "Are you ready for your journey? Do you want to go into the castle or would you like to go into the woods?");
//    else if where === "castle"
//    else if where === "woods"
//        
    
}





function checkInventory(){
    console.log(inventory);
}

while(true){
    walk();
}

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
