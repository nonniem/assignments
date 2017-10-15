import React from "react";

function TodoItem(props){
  return(
    <div>
        <h1> {props.todo.title} </h1>
        <h1> {props.todo.description} </h1>
        <h1>^^^^^^$$$$$$^^^^^^</h1>
    </div>
  )
}

export default TodoItem;
