import React from "react";

function Soda(props) {
  const Cool = {
      background: "yellow",
      height: "1000px",
      width: "200px"

  }
  return(
    <div style={Cool}>
      <input onChange={props.handleChange} type="text"/>
      <h2>{props.label}This is also spaGhetti</h2>
      <button onClick={props.hhhh} >Click Me</button>
    </div>
  )
}

export default Soda;
