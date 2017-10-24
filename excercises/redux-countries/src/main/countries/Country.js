import React from "react";
import {connect} from "react-redux";
import {countries} from "../../redux/actions/";

function Country(props){

  const style = {
    backgroundImage: `url(${props.country.imgURL})`,
    backgroundSize: "cover",
    width: "300px",
    height: "220px",
    border: "solid black 2px",
    margin: "20px"
  }

  const deleteing = {
    borderRadius: "25%"
  }

  const userInput = {
    textAlign: "center"
  }

  return(
      <div style={style}>
            <h4 style={userInput}>{props.country.name}</h4>
            <button style={deleteing} onClick={()=>{props.deleteCountry(props.index)}}>Deelete</button>
      </div>
  )
}

export default connect(null, countries)(Country);
