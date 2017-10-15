import React from "react";
import { Button } from 'react-bootstrap';

function Presentation(props) {
  const info ={
    color: "magenta",
    letterSpacing: "20px",
    border: "limegreen 2px solid",
    borderRadius: "20%",
    padding: "5px"
  }

  const infod ={
    color: "navyblue",
    letterSpacing: "5px",
    borderRadius: "35%",
    padding: "5px"
  }

  return(
    <div>
        <h1 style={infod}>Message: {props.todo.title}</h1>
        <h1 style={infod}>Notes: {props.todo.description}</h1>
        <Button style={info} onClick={() => (props.deleteTodo(props.todo._id))}>DeletE</Button>
        <hr/>
    </div>
  )
}

export default Presentation;
