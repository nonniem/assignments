import React from "react";
import FormComponent from "./Component";
import {connect} from "react-redux";
import {politics} from "../../redux/actions/";

class FormContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: {
                title: "",
                description: ""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e){
        e.persist();
        this.setState((prevState) => {
            return {
                posts: {
                    ...prevState.posts,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addPost(this.state.posts);
        this.setState({
            posts: {
                title: "",
                description: ""
            }
        })
    }

    render(){
        return(
            <FormComponent
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    posts={this.state.posts}/>
        )
    }
}

export default connect(null, politics)(FormContainer);
