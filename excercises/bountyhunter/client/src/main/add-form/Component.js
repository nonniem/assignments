import React from "react";

function FormComponent(props){
  const inputBox = {
    margin: "5px"
  }
  return(
    <div>
        <form onSubmit={props.handleSubmit}>
            <input style={inputBox} value={props.inputs.title} name="title" onChange={props.handleChange} placeholder= "title" type="text"/>
            <input style={inputBox} value={props.inputs.description} name="description" onChange={props.handleChange} placeholder= "description" type="text"/>
            <button type="submit">add 2 list</button>
        </form>
    </div>
  )
}

export default FormComponent;
