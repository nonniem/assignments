https://coursework.vschool.io/array-reduce-exercises/


//first problem
//
//function total(arr) {
//    return arr.reduce(function (currentTotal, obj) {
//        return currentTotal + obj
//    }, 0)
//}
//
//console.log(total([1, 2 , 3]))


//var nums = [1, 2, 3]
//
//var total = nums.reduce(function(sum, number){
//    return sum + number;
//}, 0)
//
//console.log(total)






//second problem

//function stringConcat(arr) {
//    return arr.reduce(function (currentTotal, obj){
//        return currentTotal + obj
//    }, "");
//}

//console.log(stringConcat([1,2,3]))

//var nums = [1, 2, 3]
//
//var string = nums.reduce(function() {
//    return nums.join("")
//} )

//console.log(string)





            //problem three
//var voters = [  
//    {name:'Bob' , age: 30, voted: true},
//    {name:'Jake' , age: 32, voted: true},
//    {name:'Kate' , age: 25, voted: false},
//    {name:'Sam' , age: 20, voted: false},
//    {name:'Phil' , age: 21, voted: true},
//    {name:'Ed' , age:55, voted:true},
//    {name:'Tami' , age: 54, voted:true},
//    {name: 'Mary', age: 31, voted: false},
//    {name: 'Becky', age: 43, voted: false},
//    {name: 'Joey', age: 41, voted: true},
//    {name: 'Jeff', age: 30, voted: true},
//    {name: 'Zack', age: 19, voted: false}
//];
//
//var total = voters.reduce(function(results, currvoter){
//    if (currvoter.voted === true) previous.voted++;
//    if (currvoter.voted === false) previous.novote++;
//    return results;
//}, {voted: 0, novote: 0});
//
//console.log(total);




//problem four

//function shoppingSpree(arr) {
//    return arr.reduce(function(runningTotal, currObj) {
//        return runningTotal + currObj.price;
//    }, 0)
//}
//
//var wishlist = [  
//    { title: "Tesla Model S", price: 90000 },
//    { title: "4 carat diamond ring", price: 45000 },
//    { title: "Fancy hacky Sack", price: 5 },
//    { title: "Gold fidgit spinner", price: 2000 },
//    { title: "A second Tesla Model S", price: 90000 }
//];
//
//console.log(shoppingSpree(wishlist))// 227005  





//problem 5

//function flatten(arr) {
//    return arr.reduce(function(flattened, curr){
//        return flattened.concat(curr);
//    }, [])
//
//}
//
//var arrays = [  
//    ["1", "2", "3"],
//    [true],
//    [4, 5, 6]
//];
//
//console.log(flatten(arrays)) // ["1", "2", "3", true, 4, 5, 6]; 








//problem six





https://files.slack.com/files-pri/T03Q59F9G-F794RA8QG/pasted_image_at_2017_09_27_11_29_am.png








