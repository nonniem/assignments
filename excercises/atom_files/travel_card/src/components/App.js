import React from "react";
import SpotArray from "./index.json";
import SpotList from "./spotList.js";
import Title from "./Title.js"

function App(){
    return(
        <div className="background">
          <Title/>
          <SpotList spotArray={SpotArray}/>
        </div>
    )};

    export default App;
