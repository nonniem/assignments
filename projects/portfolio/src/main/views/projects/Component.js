import React from "react";
import {Switch, Route} from "react-router-dom";
import ProjectLayout from "./views/index";

function Projects(props){
    let searchById = props.searchById;
    const style={
        paddingTop: "10px",
        paddingLeft: "20px"
    }
    return(
        <div className="bodyLayout">
            <div  style={style}>
                {props.genLinks()}
            </div>
            <div>
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
