document.getElementById("button").addEventListener("click", function (){
    var title = document.right.toDoText.value;
    var price = document.right.price.value;
    var description = document.right.description.value;
    var newList = document.getElementById("todoDisplay");
    var newItem = new TodoListItem(title, price, description);
    axios.post("https://api.vschool.io/nonnie/todo", newItem).then(function(response){  
    });
});
                                                   

document.getElementById("listButton").addEventListener("click", function() {
     axios.get("https://api.vschool.io/nonnie/todo").then(function(response){
            var newList = document.getElementById("todoDisplay")
                for (var i = 0; i < response.data.length; i++){

newList.innerHTML += 
    `<div>  Title: <li> ${response.data[i].title} </li> </div>
     <div>  Price:     <li>   ${response.data[i].price} </li> </div>
     <div>  Description:   <li>     ${response.data[i].description} </li></div>`
}})});
         
function TodoListItem(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
};
      



