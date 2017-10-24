import React from "react";
import EditComponent from "./Component";
import {connect} from "react-redux";
import {todos} from "../../redux/actions/";

class EditContainer extends React.Component{
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
    this.handleEdit = this.handleChange.bind(this);
  }

  handleEdit(e){
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
    this.props.editTodo(this.state.inputs);
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
                <EditComponent
                  handleSubmit={this.handleSubmit}
                  handleEdit={this.handleEdit}
                  inputs={this.state.inputs}
                                            />
      )
  }
}

export default connect(null, todos)(EditContainer);
