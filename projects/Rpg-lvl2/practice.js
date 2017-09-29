//good beginning for the project. created in class. dont have to use but could be a good reference point.
var readlineSync = require("readline-sync");

var name = readlineSync.question("Welcome to my RPG this is not a test, Please state your name ______.")

var inventory = ["Potato", "Muffins"];

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
    var option = readlineSync.keyInSelect(options, "What would you like to do " + name + "?")+1;
    if (option === 1) {
        goIntoTheAbyss();
    } else {
        checkInventory();
    }
}

function run() {
    var runs = ["walk", "Continue to hyperventilate"]
    var runner = readlineSync.keyInSelect(runs, "Are you sure you have the cardio for this? I thought you were a smoker!")+1;
    if (runner === 1) {
        walk();
    } else {
        hyperventilate();
    }
}

function goIntoTheAbyss (){
    var choices = ["Castle", "Woods"]
    var choice = readlineSync.keyInSelect(choices, "Are you ready for your journey?" + name + "Do you want to go into the castle or would you like to go into the woods?")+1;
    if (choice === 1) {
        castle();
    } else {
        woods();
    }
}

function castle (){
    var castles = ["Battle", "run"]
    if (percentage(1, 4) === 1) {
        var castled = readlineSync.keyInSelect(castles, "The king greets you with love and compassion, but he saw you look at his daughter and tensions rise. Battle?")+1;
        if (castled === 1) {
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
    var wood = readlineSync.keyInSelect(wooded, "Idk why were in the woods, i want some snacks. lets head to the castle.")+1;
    if (wood === 1) {
        castle();
    } else {
        run();
    }
}

function hyperventilate() {
    var hyperventilated = ["Drink Water of Life", "Don't move and die"];
    var hyperventinlating = readlineSync.keyInSelect(hyperventilated, "You get overly tired and pass out in a feild. You can drink the Water Of Life, or die right here on the ground. Choose your fate.")+1;
    if (hyperventinlating === 1) {
        WOL();
    } else {
        death();
    }
}

function WOL (){
    var waterOfLife = ["Go with the fairy", "Fight!"];
    var waterOflifed = readlineSync.keyInSelect(waterOfLife, "You have drank the magical water! A fairy has appeared and wants to take you to her home. But you arent sure! do you want to fight or go with her.")+1;
    if (waterOflifed=== 1) {
        fairy();
    } else {
        battle();
    }
}

function fairy (){
    var fairied = ["Bed with fairy", "Street Taco's"];
    var fairies = readlineSync.keyInSelect(fairied, "The magical fairy Bares gifts to offer and gives you two choices. You can choose to take the beautiful fairy to her bed. Or get street tacos.. it is unlimited street tacos. condiments included.") + 1;
    if(fairies === 1){
       bed();
       }else {
           taco();
       }
}

function battle(){
       var champ = characters.map(function(character){
        return character.name;
        return character.power});
        var battled = readlineSync.keyInSelect(champ, "Choose your champion!") 
        var champ = champ[battled];
        var enemy = enemies[percentage(0, enemies.length)]
        console.log(enemy.name + " Is your enemy");
      attack(enemy);
}

function attack(enemy){
        if (percentage(1, 2) === 1) {
            console.log("A fight breaks out!"); 
                enemyAttack(enemy); 
        } else {
            console.log("You slit the enemies throat and started laughing. You let him go!"), 
                enemyRun();
        }
    }

function add(){
    inventory.push("Banana, Squirrel, Choooowda")
        return inventory;
};

function secondAttack(enemy){
    if(percentage(1, 1) === 1){
        add(inventory);
        console.log("You have killed the " + enemy.name + <br> ", in the distance. A fairy princess is admiring you and starts to approach you.");
                fairy(enemy);
    } 
}

function enemyAttack(enemy){
    if(percentage(1, 20) === 19){
        console.log("He got lucky and shanked ya. GG");
            death();
    } else {
        console.log("He missed! Time to come in for the second attack!");
            secondAttack(enemy);
    }
}

function enemyRun(enemy){
        if(percentage(1, 1) === 1){
        console.log("You have scared the enemy and he runs! But in the distance, a fairy princess is admiring you and starts to approach you.");
                fairy();
    }
}

function death(){
    var rebirth = ["Play Again!", "Quit. This game sucks...!"];
    var deathed = readlineSync.keyInSelect(rebirth, "O dear you have died! You can try again if you'd like!")
    console.log("good game m8. better luck next time..") + 1;
    if(deathed === 1){
            walk();
     } else {
        console.log("Better luck next year m8")
     }
}

function taco(){
    console.log("You're greeted with an abundance of taco's and all the garnishes you can imagine. They also have guac. GAME OVER")
}

function bed(){
    console.log("The sexy little fairy lady takes you over the river and through the woods. As you approach a meadow you see a small house in the distance. She takes you into her home. But it turns out she was married and you end up dead anyway. Rookie Mistake GG. Tacos are better anya")
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
//you will get to choose which champion youd like to fight with and then you are randomly given an enemy to fight.
//you will attack first, then them and they you will return with a second attack.   
// i would like to create a function that randomly generates hits and will take from your hitpoints variable every time you're hit/and the enemy
//you will die or kill them. if killed you'll pick up there items and continue on your journey.
