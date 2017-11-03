import React from "react";
import EditPost from "./Component";
import {connect} from "react-redux";
import {politics} from "../../../../redux/actions/";

class EditContainer extends React.Component{
    constructor(props){
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
        console.log(e.target.value)
        e.persist;
        this.setState((prevState)=>{
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
        this.props.editPost(this.props.postId, this.state.post)
        this.setState({
            post: {
                title: "",
                description: ""
            }
        })
    }

    render(){
        return(
            <EditPost
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                post={this.state.post}
            />
        )
    }
}

export default connect(null, politics)(EditContainer);
