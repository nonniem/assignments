import React from "react";

function FormComponent(props){
  
  const style= {
    background: "magenta"
  }

  return(
    <div style={style}>
        <form onSubmit={props.handleSubmit}>
              <input onChange={props.handleChange} value={props.inputs.name} name="name" style={style} type="text" placeholder="Country Name"/>
              <input onChange={props.handleChange} value={props.inputs.imgURL} name="imgURL" style={style} type="text" placeholder="Flag Image Url"/>
              <button type="submit" style={style}>k l i q to push</button>
        </form>
    </div>
  )
}

export default FormComponent;
