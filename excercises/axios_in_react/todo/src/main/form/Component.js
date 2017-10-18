import React from "react";

function FormComponent(props){
  return(
          <div>
                <form>
                    <input type="text" placeholder="title"/>
                    <input type="text" placeholder="description"/>
                    <button type="submit"></button>
                </form>
            </div>
  )
}

export default FormComponent;
