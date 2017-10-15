import React from "react";

function HitListComponent(props) {
const size = {
  height: "400px",
  width: "300px",
  border: "solid white 6px",
  display: "inline-block",
  margin: "10px",
  background: "black",
  color: "white",
}

const image = {
  height:"300px",
    width: "100%"
}

const text = {
  textAlign: "center"
}

  return(
        <div style={size}>
            <img style={image} src={props.image} alt=""/>
            <h2 style={text}>{props.name}</h2>
        </div>
  )
}

export default HitListComponent;
