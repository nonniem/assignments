import React from "react";

function Vacation(props){
const styles = {
    background: "url("+props.background+") no-repeat center center",
    width: "170px",
    height: "280px",
    display: "inline-block",
    position: "relative",
    alignItems: "center",
    border: "solid 5px white"
  }

const details = {
    color: "white",
    textAlign: "center"
}

const position = {
    position: "ablsolute",
    backgroundSize: "cover",
    display: "inline-block",
    margin: "40px"
}

const destiny = {
    top: "15px",
    position: "relative",
    display: "inline-block",
    background: "black",
    color: "white",
    width: "180px",
    textAlign: "center"
}

const signature = {
    position: "relative",
    left: "5px",
    top: "-20px",
    fontFamily: "monospace",
    color: "white"
}

  return(
    <div style={position}>
        <div>
            <p style={destiny}> Destination: {props.destination} </p>
        </div>

        <div style={styles}>
            <h6 style ={signature}>This is not a drill! This is spaghetti</h6>
        </div>

        <div style={details}>
            <p>  Cost: ${props.cost}.00 <br/> Travel Time: {props.traveltime}hrs.
            <br/> Climate: {props.climate} <br/>  Language: {props.language}  </p>
        </div>

    </div>
    )};

    export default Vacation;
