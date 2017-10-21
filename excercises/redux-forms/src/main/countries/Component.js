import React from "react";

function CountriesComponent(props){
  const style = {
    display: "flex",
    flexWrap: "wrap",
    alignSelf: "center"
  }
    return(
      <div style={style}>
          {props.genList()}
      </div>
    )
}

export default CountriesComponent;
