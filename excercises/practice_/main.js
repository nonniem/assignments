//You're making a restaurant, so you need a menu. Make an array of three
//object literal items for dishes on your menu. Then make a constructor
// function and add 3 more items to your menu.
var menuItems = [
//    {item: "mushroom", price:"1.00"},
//    {item: "potato", price:".60"},
//    {item: "tomato", price:".75"},
];


function MenuItem(item, price){
    this.item =item;
    this.price=price;
}

var turkey = new MenuItem("Dried Turkey", 4.00)
var fried = new MenuItem("Fried Chicken", 5.00);
var grilled = new MenuItem("Grilled Chicken", 6.00);
var list = document.getElementById("newItems").innerHTML;

menuItems.push(grilled, fried, turkey);
console.log(menuItems);

for (var i = 0; i < menuItems.length; i++){
    document.getElementById("newItems").innerHTML += "<li>" + menuItems[i].item + "<br>" + "Price $" + menuItems[i].price + " DollHairs" + "</li>" + "<br>";
}



var name = "Nonnie";
console.log("Hello " + name)