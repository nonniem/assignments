import React from "react";

function FormComponent(props){

  const style= {
    background: "magenta"
  }

  return(
    <div style={style}>
        <form onSubmit={props.handleSubmit}>
              <input onChange={props.handleChange} value={props.inputs.name} name="name" style={style} type="text" placeholder="name caption"/>
              <input onChange={props.handleChange} value={props.inputs.bottom} name="bottom" style={style} type="text" placeholder="bottom caption"/>
              <input onChange={props.handleChange} value={props.inputs.imgURL} name="imgURL" style={style} type="text" placeholder="meme image Url"/>
              <button type="submit" style={style}>k l i q to push</button>
        </form>
    </div>
  )
}

export default FormComponent;
