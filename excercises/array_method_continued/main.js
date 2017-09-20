//foreach
var cars = ["carrot", "tomato", "letus"] 


//for (var i = 0; i < cars.length; i++) {  
//  console.log(`${cars[i]} goes vroom`);
//}

cars.forEach(function(car){
    console.log(car);
})





//map

var angryCars = [];

for (var i = 0; i < cars.length; i++) {  
  angryCars.push(cars[i].toUpperCase());
}

var angryCars = cars.map(function(car){
    return car.toUpperCase();
})




//filter
var newCars = [];

for (var i = 0; i < cars.length; i++) {  
  if (cars[i].year > 2005){
    newCars.push(cars[i]);
  }
}

var porsche = cars.filter(function(car){
    return car.make === "porsche";
})




//find
for (var i = 0; i < cars.length; i++) {  
  if (cars[i].make === "E150"){
    var coolVan = cars[i];
    break;
  }
}

var coolVan = cars.find(car){
    return car.model === E150;
}




//some
for (var i = 0; i < cars.length; i++) {  
  if (cars[i].make === "E150"){
    console.log("There is one or more E150s");
    break;
  }
}

var makeOfVehicle = cars.every(function(car){
    return car.make === E150;
})



//every 
for (var i = 0; i < cars.length; i++) {  
  if (cars[i].make != "E150"){
    console.log("Not every car is an E150");
    break;
  }
}

var notE150 = cars.some(function(car){
    return car.make !== E150;
})


//reduce
var numberOfFords = 0;  
var numberOfChevys = 0;

for (var i = 0; i < cars.length; i++) {  
  if (cars[i].model === "ford"){
    numberOfFords ++;
  }
  if (cars[i].model === "chevy"){
    numberOfchevys ++;
  }
}



var carTotals = cars.reduce(function(previous, car){
    if (car.model === "chevy"){
        return previous.numberOfchevys++;
    }else if (cars.model === "ford"){
        return previous.numberOfFords++;
    } else {
        return previous 
    }
}
,{ numberOfFords: 0, numberOfchevys: 0 })








