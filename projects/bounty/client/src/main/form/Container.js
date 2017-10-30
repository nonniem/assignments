import React from "react";
import {bounty} from "../../redux/actions/";
import {connect} from "react-redux";
import FormComponent from "./Component";

class FormContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            bountys: {
                title: "",
                description: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        e.persist();
        this.setState((prevState)=>{
            return{
                bountys: {
                    ...prevState.bountys,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addBounty(this.state.bountys);
        this.setState({
            bountys: {
                title: "",
                description: ""
            }
        })
    }

    render(){
        return(
            <FormComponent
                bountys={this.state.bountys}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                                                />
        )
    }
}

export default connect(null, bounty)(FormContainer);
