import React from "react";
import Information from "./Info.js";
import HeroArray from "./index.json";

function App(){

    return(
        <div>
            <Information heroArray={HeroArray}/>
        </div>
        )};

export default App;
