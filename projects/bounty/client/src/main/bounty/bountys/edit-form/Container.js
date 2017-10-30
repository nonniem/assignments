import React from "react";
import EditComponent from "./Component";
import {connect} from "react-redux";
import {bounty} from "../../../../redux/actions";

class EditContainer extends React.Component{
    constructor(props){
        super();
        this.state = {
            edit: {
                title: "",
                description: ""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        console.log(e.target.value)
        e.persist();
        this.setState((prevState) => {
            return {
                edit: {
                    ...prevState.edit,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.editBounty(this.props.bountyId, this.state.edit);
        this.setState({
            edit: {
                title: "",
                description: ""
            }
        })
    }

    render(){
        return(
                <EditComponent
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        edit={this.state.edit}
                                                />

        )
    }
}

export default connect(null, bounty)(EditContainer);
