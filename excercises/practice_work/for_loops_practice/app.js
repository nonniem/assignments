//// Warmup 1
//// Using a for loop, write a program that prints
//// the numbers 0 - 100 in the console (each number on its
//// own line)
//
//for (var i = 0; i <= 100; i++) {
//  console.log(i);
//}
//
//// Warmup 2
//// Using a for loop, write a program that prints the numbers 100
//// to 0 (counting backwards) in the console (each number on its
//// own line)
//
//for (var i = 100; i >= 0; i--) {
//  console.log(i);
//}
//
//// Warmup 3
//// Using a for loop, write a program that prints the EVEN numbers
//// between 0 and 100 in the console (each number on its own line)
//
//
//for (var i = 0; i < 101; i += 2) {
//  console.log(i);
//}
//
//for (var i = 0; i <= 100; i++) {
//  if (i % 2 === 0) {
//    console.log(i);
//  }
//}
//
//
//// Warmup 4
//// Using a for loop, write a program that prints the ODD numbers
//// from 100 to 0 (going backwards) in the console (each number
//// on its own line)
//
//
//for (var i = 99; i >= 0; i--) {
//  if (i % 2 === 1) {
//    console.log(i);
//  }
//}
//
//for (var i = 99; i > 0; i-=2) {
//  console.log(i);
//}
//
//
//
//
//
//
//
//
//
//
////More examples 
//
//
//var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
//console.log(colors.length);
//
//for (var i = 0; i < colors.length; i++) {
//  console.log(colors[i]);
//}
//
//for (var i = 0; i < 20; i++) {
//  console.log(colors[i % colors.length]);
//}
//
//
//
//
//
//
//
////example
//
//var myPhrase = "I like turtles. They are fun. And ninjas.";
//for (var i = 0; i < myPhrase.length; i++) {
//  console.log(myPhrase[i]);
//}
//
//
//
//
//
////example
//
//
//var vegetables = ["Squash", "Carrots", "Celery", "Peanuts", "Kiwi"];
//
//for (var i = 0; i < vegetables.length; i++) {
//  if (vegetables[i] === vegetables[1]) {
//    console.log(vegetables[1] + " found at index " + i);
//    break;
//  } else {
//    console.log(vegetables[i] + " is not " + vegetables[1] + "!");
//  }
//}
//
//
//
//
var powerRangers = ["Jason", "Kimberly", "Billy", "Kimberly", "Trini", "Zack"];

// replacing an existing item
// powerRangers[2] = "William";
// console.log(powerRangers);

// .push(item[s])
// powerRangers.push("Tommy");
// console.log(powerRangers);

// .pop()
// var lastItem = powerRangers.pop();
// console.log(lastItem);
// console.log(powerRangers);

// .shift()
// var firstItem = powerRangers.shift();
// console.log(firstItem);
// console.log(powerRangers);

// .unshift(item[s])
// powerRangers.unshift("Tommy");
// console.log(powerRangers);

// var powerRangers = ["Jason", "Kimberly", "Billy", "Trini", "Zack"];

// .splice(index, numToRemove[, itemsToInsert])
// powerRangers.splice(3, 1);
// console.log(powerRangers);


// .indexOf(item)
// var index = powerRangers.indexOf("Kimberly");
// console.log(index);


// Challenge: find Jason in the array and remove him.
// var index = powerRangers.indexOf("Kimberly");
// console.log(index);

// var powerRangers = ["Jason", "Kimberly", "Billy", "Kimberly", "Trini", "Zack", "Kimberly"];
// Challenge: create an array with the index of every Kimberly 
// in the powerRangers array

// var kimberlyArray = [];
// for (var i = 0; i < powerRangers.length; i++) {
//   if (powerRangers[i] === "Kimberly") {
//     kimberlyArray.push(i);
//   }
// }

// Weird, confusing way to do this:
// for (var i = 0; i < powerRangers.length; i++) {
//   var index = powerRangers.indexOf("Kimberly");
//   if (index >= 0) {
//     kimberlyArray.push(index);
//     powerRangers.splice(index, 1, "X");
//   }
// }