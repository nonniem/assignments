import React from "react";
import FormComponent from "./Component";
import {connect} from "react-redux";
import {todos} from "../../redux/actions/";

class FormContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      inputs: {
        name: "",
        date: "",
        time: ""
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
      e.persist();
      this.setState((prevState)=>{
        return {
            inputs: {
              ...prevState.inputs,
              [e.target.name]: e.target.value
            }
        }
      })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addTodo(this.state.inputs);
    this.setState({
      inputs: {
        name: "",
        date: "",
        time: ""
      }
    })
  }

  render(){
      return(
                <FormComponent
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  inputs={this.state.inputs}
                                            />
      )
  }
}

export default connect(null, todos)(FormContainer);
