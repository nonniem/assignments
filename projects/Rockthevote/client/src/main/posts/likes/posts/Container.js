import React from "react";
import EditPost from "./Component";
import {connect} from "react-redux";
import {} from "../../../../redux/actions/";

class EditContainer extends React.Component{
    constructor(props){
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
        console.log(e.target.value)
        e.persist;
        this.setState((prevState)=>{
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
        this.props.editPost(this.props.postId, this.state.posts)
        this.setState({
            posts: {
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
                posts={this.state.posts}
            />
        )
    }
}

export default connect(null, politics)(EditContainer);
