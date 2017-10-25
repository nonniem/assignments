import React from "react";
import {todos} from "../../../redux/actions/";
import {connect} from "react-redux";

function TodoComponent(props){
  const button={
    borderRadius: "35%"
  }
  return(
    <div >
          <h4>{props.todo.title}</h4>
          <h4>{props.todo.description}</h4>
          <h4>{String(props.todo.completed)}</h4>
          <h4>{props.todo._id}</h4>
          <button onClick={()=>{props.deleteTodo(props.todo._id)}} style={button}>{"bitter nerve"}</button>
    </div>
  )
}

export default connect(null, todos)(TodoComponent);
