document.getElementById("add-todo").addEventListener("click", function(){
        var newTodo = document.getElementById("to-do-text");
        var list = document.getElementById("todo-list");
        list.innerHTML += "<li>" + newTodo.value + "</li>";
        newTodo.value="";
        
        

////Low level way of creating elements.
//    var newLi = document.createElement("li");
//    document.getElementById("todo-list").appendChild(newLi);
//    var todoTextNode = document.createTextNode(newTodoText);
//    newLi.appendChild(todoTextNode);
});