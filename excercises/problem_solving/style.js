//Write a function that takes an array of numbers and returns the largest
//
function myArray(arr){
    var largest = arr[0];
    for(var i = 1;i < myArray.length; i++){
        if (largest < arr[i]){
            largest = arr[i];
        }
}
 return largest;
    }

console.log(myArray([6,3,19]))

//Write a function that takes an array of words and a character and return each word that has that letter present



    function filterWords(arr, char) {
        var matches = arr.filter(function(item){
            return item.indexOf(char) !== -1;
        })
        return matches;
    }

console.log(filterWords(["potato", "tomato"], "o"));



// Write a function that takes a num1 and num2 and returns whether num1 is
//divisible by num2


function divide(a,b){
    return a % b ===0;
}
console.log(divide(3,4));
