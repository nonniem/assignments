//     https://coursework.vschool.io/exercise-loops/





//function printString(str) {
//    for (var i = 0; i > str.length; i++){
//        console.log(str[i]);
//    }
//}
//printString("my string");




//function findLetter(str, letter) {
//    for (var i = 0; i < str.length; i++) {
//        if (letter === str[i]) {
//            console.log(i);
//            return;
//        }
//    }
//    console.log("You're an idiot");
//    return;
//}
//
//findLetter("Hi there", "z");



//var myArray = ["a","b"];
//
//function find42(arr) {
//    for (var i = 0; i <arr.length; i++) {
//        if (arr[i] === 42){
//            console.log("We found 42 at the index", i);
//            return;
//        }
//    }
//    console.log("didnt find 42 in this array");
//}
//
//find42([1,2,3,4,42,9,88]);




//var arr = [12, 22, 32, 42, -10];
//
//function loop4(arr) {
//    var smallNum = arr[0];
//    for (var i = 1; i < arr.length; i++) {
//        if (arr[i] < smallNum) {
//            console.log("smallest until now was", smallNum);
//            smallNum = arr[i];
//            console.log("the new smallest is", smallNum, "\n");
//        }
//    }
//    console.log(smallNum);
//}
//loop4(arr);