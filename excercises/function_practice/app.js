var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
 

function print(arr) {
    console.log(arr.reverse().join(" "));
}
print(lyrics);

    
function printEveryOther(arr) {
    var everyOtherLyric = [];
    
    for (var i = 0; i < arr.length; i += 2) {
        everyOtherLyric.push(arr[i]);
    }
    console.log(everyOtherLyric.join(" "));
}    
printEveryOther(lyrics);





var person = {
    speak: function() {
        console.log("Hi");
    }
}

//person.speak();



var captainPlanet = ["Earth", "Wind", "Water", "Fire", "Heart"];
//                  ["htraE", "dniW", "retaW", "eriF", "traeH"];
// console.log(captainPlanet[0])
// console.log(captainPlanet[1])
// console.log(captainPlanet[2])
// console.log(captainPlanet[3])
// console.log(captainPlanet[4])

var backwards = []

for (var i = 0; i < captainPlanet.length; i++) {
  var arrStr = captainPlanet[i].split("");
  var reversed = arrStr.reverse();
  backwards.push(reversed.join(""));
//   console.log(backwards);
}

console.log(backwards);







// more examples.


var original = [1,2,3,4,5];
                    // we are tryin to double all of these
function doubleNums(arr) {
    for (var i = 0; i < arr.length; i++){
        doubles.push(arr[i] * 2);
    }
    return doubles;       
}
var result = doubleNums(original);
console.log(reult);
console.log(original);