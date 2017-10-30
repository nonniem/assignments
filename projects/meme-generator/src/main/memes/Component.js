import React from "react";

function MemesComponent(props){
  console.log(props)
  const style = {
        display: "flex",
        flexWrap: "wrap",
        // alignSelf: "center"
}
    return(
        <div style={style}>
              {props.genList()}
        </div>
  )
}

export default MemesComponent;
