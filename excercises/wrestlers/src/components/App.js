import React from "react";
import WrestlerList from "./WrestlerList";
import wrestlerArray from "../wrestlers.json";

function App(){
    return (
        <div>
            <WrestlerList wrestlerArray={wrestlerArray}/>
        </div>
    )
}

export default App
