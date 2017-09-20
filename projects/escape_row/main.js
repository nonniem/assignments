var readline = require("readline-sync");
var name = readline.question("What is your name? ");
var index = ("");
var options = ['Check inside the hole in the wall', 'Look around for key', 'Open the door']



while (index !== 0, index !== 2) {
    var index = readline.keyInSelect(options, 'Which option?')
    if (index === 0) {
        console.log("You were shot. Instantly. It went through your L1 vertebre. Dead")
        break;
    } else if (index === 1) {
        console.log("You found the key! Goodjob")
    } else if (index === 2) {
        console.log("You need to find the key first.")
        break;
    };

    if (readline.keyInYN("Would you like to open the door?") === true) {
        console.log("Welcome back to earth " + name)
        
    } else {
        console.log("I didn't want you to open the door anyways.")
        break;
    }
      
    var escape = readline.question("Choose your escape vehicle! ")
        console.log("Alright " + name + " lets roll out in the " + escape)
        break;
    }
;
