import React from "react";
import {Link} from "react-router-dom";
import ProjectComponent from "./Component";

class ProjectContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            projects: []
        }
        this.genLinks = this.genLinks.bind(this);
        this.searchById = this.searchById.bind(this);
    }


    componentDidMount(){
        this.setState({
            projects:[{
                title: "Calculator",
                description: "Adds 1, Subtracts by 2, Divides by 3 and multiplies by 2",
                link: "",
                id: "calc01"
            },{
                title: "Stopwatch",
                description: "A simple stopwatch",
                link: "",
                id: "stopwatch01"
            }]
        })};

        searchById(id){
            return this.state.projects.find((project)=>{
                return id === project.id
            });
        }

        genLinks(){
            return this.state.projects.map((project)=>{
                return <Link
                            key={project._id}
                            to={`/projects/${project._id}`}>{project.title},</Link>
            })
        }

        render(){
            return(
                    <ProjectComponent
                        genLinks={this.genLinks}
                        searchById={this.searchById}/>
            )
        }
    }

export default ProjectContainer;
