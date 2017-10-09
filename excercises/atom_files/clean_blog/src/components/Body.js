import React from "react";


function Body(props){
    const nonnie = {
          position: "relative",
          background: "blue",
          height: "200px",
          width: "60%",
          alignItems: "center"
    }
    return(
      <div>
          <div style={nonnie}>
            <h3>{props.top}</h3>
            <h3>{props.mid}</h3>
            <h5>{props.bottom}</h5>
            <h5>{props.bottom.otterspace}</h5>
          </div>
      </div>
    )};

export default Body;
