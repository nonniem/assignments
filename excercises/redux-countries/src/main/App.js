import React from "react";
import FormContainer from "./form/Container";
import CountriesContainer from "./countries/Container";

function App(props){
  const style= {
    background: "magenta"
  }

    return(
      <div style={style}>
            <FormContainer/>
            <CountriesContainer/>
      </div>
    )
}

export default App;
