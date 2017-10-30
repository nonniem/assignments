import React from "react";
import {Button, input} from "react-bootstrap";

function FormComponent(props){

  const style= {
    background: "white",
    color: "black",
    borderRadius: "15%",
    padding: "7px",
    margin: "15px",
    itemAlign: "center"
  }

  const button = {
      background: "white",
      borderRadius: "30%"
  }

  const word = {
      color: "black",
      textIndent: "80px"
  }

  const formed = {
     display: "flex",
     justifyContent: "space-between"
  }

  return(
    <div style={style}>

        <h2 style={word}>Make a Meme... or don't idc.</h2>
        <form onSubmit={props.handleSubmit} style={formed}>
              <input onChange={props.handleChange} value={props.inputs.name} name="name" style={style} type="text" placeholder="name caption"/>
              <input onChange={props.handleChange} value={props.inputs.bottom} name="bottom" style={style} type="text" placeholder="bottom caption"/>
              <input onChange={props.handleChange} value={props.inputs.imgURL} name="imgURL" style={style} type="text" placeholder="meme image Url"/>
              <Button type="submit" style={button}>k l i q to push</Button>
        </form>
    </div>
  )
}

export default FormComponent;
