import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import ProjectContainer from "./views/projects/Container.js";

function Body(props){
    return(
        <div >
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/projects" component={ProjectContainer}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/about" component={About}/>
            </Switch>
        </div>
    )
}

export default Body;
