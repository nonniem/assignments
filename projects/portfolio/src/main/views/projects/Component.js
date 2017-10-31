import React from "react";
import {Switch, Route} from "react-router-dom";
import ProjectLayout from "./views/index";

function Projects(props){
    let searchById = props.searchById;
    return(
        <div className="detailContainer">
            <div>
                {props.genLinks()}
            </div>
            <div >
                <Switch>
                    <Route path="/projects/:id" render={(props)=>{
                            return(
                                <ProjectLayout searchById={searchById}{...props}/>
                    )}}/>
                </Switch>
            </div>
        </div>
    )
}


export default Projects;
