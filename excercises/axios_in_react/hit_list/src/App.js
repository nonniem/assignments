import React from "react";
import HitList from "./components/HitList.js";
import Header from "./components/Header.js"

function App(props){
  const container = {
    width: "100%",
    height: "1500px",
    borderTop: "solid black 40px",
    borderLeft: "solid black 10px",
    borderRight: "solid black 10px"
  }

    return(
      <div style={container}>
              <Header/>
              <HitList/>
        </div>
    )
}

export default App;
