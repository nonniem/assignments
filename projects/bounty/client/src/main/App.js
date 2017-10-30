import React from "react";
import BountyList from "./bounty//BountyList.js";
import FormContainer from "./form/Container.js";

function App(props){
    return(
        <div>
                <FormContainer/>
                <BountyList/>
        </div>
    )
}

export default App;
