import React from "react";
import {connect} from "react-redux";
import {addOne, subOne, multiply, divide, zero} from "../redux/actions/index.js";


function Counter(props){
    console.log(props)
  const style={
      width: "60%",
      margin: "auto",
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      top: "100%",
      transform: "translateY(100%)"
  }

  const display = {
    width: "40%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    transform: "translateY(200%)",
    fontSize: "30px",
    textDecoration: "underline dotted limegreen",
    color: "white"
  }

  const reset = {
    background: "blue",
    fontSize: "40px",
    color: "yellow",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    transform: "translateY(60%)"
  }

  const signature = {
    float: "right"
  }
  return(
<div>
    <div >
      <button style={reset} onClick={props.zero}>RESET</button>
      <span style={display}>{props.counter}</span>
    </div>

    <div style={style}>
        <button className="button" onClick={props.multiply}>*</button>
        <button className="button" onClick={props.addOne}>+</button>
        <button className="button" onClick={props.subOne}>-</button>
        <button className="button" onClick={props.divide}>/</button>
    </div>
</div>
  )
}

const mapStateToProps = (state)=>{
      return state;
}

export default connect(mapStateToProps, {addOne, subOne, multiply, divide, zero})(Counter);
