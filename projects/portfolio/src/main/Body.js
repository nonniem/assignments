import React from "react";
import {Switch, Route} from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import ProjectComponent from "./views/projects/Component.js";

function Body(props){
    return(
        <div className="contained">
            <Switch>
                <Route path="/projects" component={ProjectComponent}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/about" component={About}/>
            </Switch>
        </div>
    )
}

export default Body;
