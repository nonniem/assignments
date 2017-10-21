import React from "react";

function Meme(props){

  const style = {
    backgroundImage: "black",
    backgroundSize: "cover",
    width: "300px",
    height: "220px",
    border: "solid black 2px",
    margin: "20px"
}

const userInput = {
      textAlign: "center"
}

return(
  <div style={style}>
          <h4 style={userInput}>{props.meme.top}</h4>
          <h4 style={userInput}>{props.meme.bottom}</h4>
  </div>
)
}

export default Meme;
