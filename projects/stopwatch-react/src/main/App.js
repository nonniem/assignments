import React from "react";
import Stopwatch from "./Stopwatch.js";

function App(props){
  const style= {
    borderRadius: "25%",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)"
  }

  return(
    <div style={style}>
          <Stopwatch/>
    </div>
  )
}

export default App;
