import React from "react";

function FormComponent(props){
return(
    <div>
            <form onSubmit={props.handleSubmit}>
                <input value={props.bountys.title} name="title" onChange={props.handleChange} type="text" placeholder="Title"/>
                <input value={props.bountys.description} name="description" onChange={props.handleChange} type="text" placeholder="Description"/>
                <button type="submit">Benjamins Button </button>
            </form>
    </div>
)}

export default FormComponent;
