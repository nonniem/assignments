var shopper = { //<--object is shopper
    groceryCart: ["meat", "cheese", "potato"], //<--strings are items
    firstName: "Nonnie"
    hasShoes: true, //boolean is a true false
    numberOfThings: 3 //number is one of four categories
};

function () {}

// all the work above was my original code

//example code is below
var shopper = {
    brandOfShirt: "Gucci";
    meaningOfLifeTheUniverseAndEverything: 42;
    isHavingFunShopping: false;
    spendMoney: function () {
        console.log("im wearing a" + this.brandOfShirt + this.meaningOfLifeTheUniverseAndEverything);
    }
}

console.log(shopper.brandOfShirt);

shopper.spendMoney();



