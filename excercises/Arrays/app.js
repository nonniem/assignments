var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

    vegetables.pop();                                       //Removing the lettuce                                                      from the equation
     fruit.shift();                               //Removing the first                                                       string of the Variable fruit

    var index = fruit.indexOf("orange");          //finding the index                                                     number of the string item "orange"
                                                            //<--condensing the console.log for the last 3 commands.
    fruit.push(index);                      //adding the index number of orange to                                       the end of our fruit array. its now an item                                                       in the string
    vegetables.push(vegetables.length);          //adding the length of the array to                                        the end of the vegetables variable.
    
    var food = fruit.concat(vegetables);

    food.splice(4,2);          //calling on the fourth index element to start there.                                which is carrot. then we are going to take away                                two elements which is the next part of the command. 
    
    food.reverse();                         //this is reversing the order 

console.log(food.toString());
console.log(food.join("-"));

    xzszxx