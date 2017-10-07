import React from "react";

function Vacation(props){
const styles = {
    background: "url("+props.background+") no-repeat center center",
    width: "200px",
    height: "280px",
    display: "inline-block",
    position: "relative",
    alignItems: "center"
  }

const content = {
    display: "inline-block",
    position: "absolute",
    bottom: "0px",
    left: "20px",
    color: "yellow"
  }

const details = {
    color: "purple",
    textAlign: "center"
}

const position = {
    alignItems: "center",
    position: "ablsolute",
    display: "inline-block"
}

const destiny = {
    top: "15px",
    left: "15px",
    position: "relative",
    display: "inline-block",
    background: "black",
    color: "white",
    width: "170px"
}

const signature = {
    position: "relative",
    left: "20px",
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
