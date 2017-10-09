import React from "react";

function Body(props){
  const container = {
    width: "30%",
    height: "300px",
    border: "black 2px dashed",
    display: "inline-block",
    margin: "20px",
    textAlign: "center",

  }
  const yaah = {
    border: "black dashed 1px"
  }
  const color = {
    textDecoration: "black solid 1px"
  }

    return(
        <div style={container} onClick={()=>props.click(props.pudding)}>
            <h4 style={yaah}>{props.superhero}</h4>
            <h4 style={color}>{props.power}</h4>
            <h4 style={color}>{props.realname}</h4>
            <img src={props.picture} alt=""/>
        </div>
  )};

export default Body;
