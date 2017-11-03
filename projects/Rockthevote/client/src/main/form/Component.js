import React from "react";

function FormComponent(props){
    return(
        <div>
                <form onSubmit={props.handleSubmit}>
                    <input onChange={props.handleChange} value={props.post.title} placeholder="name" name="title" type="text"/>
                    <button type="submit">slick</button> <br/> <br/>
                    <textarea onChange={props.handleChange} value={props.post.description} placeholder="description" name="description" id="" cols="25" rows="1"></textarea>
                </form>
        </div>
    )
}

export default FormComponent;
