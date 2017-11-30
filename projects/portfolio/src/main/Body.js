import React from "react";
import {Switch, Route} from "react-router-dom";

import Contact from "./views/Contact";
import Projects from "./views/Projects";

function Body(props){
    return(
        <div>
            <Switch>
                <Route path="/projects" component={Projects}/>
                <Route path="/" component={Contact}/>
            </Switch>
        </div>
    )
}

export default Body;
