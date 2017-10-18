import React from "react";



function Service(props){
  const id = props.match.params.id;
  const style = {
    color: "beige",
    textAlign: "center"
  }
    return(
      <div style={style}>
          <h3>{props.searchById(id).title}</h3>
          <h3>{props.searchById(id).price}</h3>
      </div>
    )
}


export default Service;
