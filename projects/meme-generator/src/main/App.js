import React from "react";
import FormContainer from "./form/Container";
import MemeContainer from "./memes/Container";

function App(props){
    const signature = {
        right: "5px",
        color: "black",
        textAlign: "right"
    }

    const container ={
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
    }

    return(
      <div style={container}>
            <FormContainer/>
            <MemeContainer/>
            <div>
            <h6 style={signature}>made by: Nonnie ;)</h6>
            </div>
  </div>
  )
}

export default App;
