import React from "react";
import FormComponent from "./Component";
import {connect} from "react-redux";
import {politics} from "../../redux/actions/";

class FormContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            post: {
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
                post: {
                    ...prevState.post,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addPost(this.state.post);
        this.setState({
            post: {
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
                    post={this.state.post}/>
        )
    }
}

export default connect(null, politics)(FormContainer);
