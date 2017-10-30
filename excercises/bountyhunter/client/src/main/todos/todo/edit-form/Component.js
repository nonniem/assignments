import React from "react";

function EditComponent(props){
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
          <input onChange={props.handleChange} name="title" type="text" value={props.edit.title} placeholder={props.edit.title}/>
          <input onChange={props.handleChange} name="description" type="text" value={props.edit.description} placeholder={props.edit.description}/>
          <button type="submit">Edit</button>
      </form>
    </div>
  )
}

export default EditComponent;
