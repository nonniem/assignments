//var readline = require("readline-sync");
//
//readline.question("what's your name? ");
//console.log("hello" + name);
//readline.question(name + " I have been hearing rumors you been taking coding classes")


var readline = require("readline-sync")
var name = readline.question("what's your name? ")
    name = name.toUpperCase();  console.log(name);
var hobbies = readline.question ("what do you like to do for fun " + name + "? " )
var swagLength = hobbies.length;  console.log(swagLength);
var opinion = readline.question ("I thought you were smarter than that " + name + "! ")
var feedback = readline.question (name + " Don't worry about it! " + "we can go " + hobbies + " anyways. ")
var combinedString = opinion.concat(hobbies); console.log(combinedString);
var swagItemLength = console.log("Bro you dont even skate " + hobbies.substr(hobbies.length/2));
var totalLength = readline.question ("Are you a failure?")
    if (hobbies.length < 15){
       console.log(name + hobbies + swagLength + opinion)
    } else {
        console.log("maybe next year " + name)
    }


console.log(totalLength);


    



