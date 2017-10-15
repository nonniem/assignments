import React from "react";
import Information from "./Info.js";
import HeroArray from "./data.json";
import Title from "./Header.js"
// let heros = JSON.parse(HeroArray);

function App(){

    return(
        <div>
            <Title/>
            <Information heroArray={HeroArray}/>
        </div>
        )};

export default App;
