import React from "react";

function FormComponent(props){
    return(
        <div>
                <form>
                    <textarea placeholder="description" name="description" id="" cols="20" rows="2"></textarea>
                    <input placeholder="name" name="title" type="text"/>
                    <button type="submit">slick</button>
                </form>
        </div>
    )
}

export default FormComponent;
