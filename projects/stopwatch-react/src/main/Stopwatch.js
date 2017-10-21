import React from "react";
import {connect} from "react-redux";
import {timer} from "../redux/actions/";

class Stopwatch extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }
  handleClick(){
    clearInterval(this.interval);
    this.interval = setInterval(this.props.addTime, 10);
  }
   handlePause(){
    clearInterval(this.interval);
  }
  render(){
    const style = {
      borderRadius: "30%",
      background: "black",
      border: "white 3px solid",
      color: "white",
      textAlign: "center",
      padding: "5px",
      color: "white",
      width: "90px"
    }
    const styled = {
      borderRadius: "30%",
      background: "black",
      color: "white",
      textAlign: "center",
      size: "34px",
      marginTop: "80px",
      border: "black 2px solid"
    }
    const border = {
      borderRadius: "20%",
      border: "solid magenta 1px",
      width: "400px",
      height: "300px",
      margin: "auto",
      boxShadow: "5px 5px 3px black"
    }
    const button = {
      marginLeft: "50px"
    }
    const minutes = this.props.timer.minutes < 10 ? "0" + this.props.timer.minutes : this.props.timer.minutes
    const seconds = this.props.timer.seconds < 10 ? "0" + this.props.timer.seconds : this.props.timer.seconds
    const milliseconds = this.props.timer.milliseconds < 10 ? "0" + this.props.timer.milliseconds : this.props.timer.milliseconds
    return (
    <div style={border}>
        <h1 style={styled}>{minutes}:{seconds}:{milliseconds}</h1>
        <div style={button}>
          <button style={style} onClick={this.props.reset}>Reset</button>
          <button style={style} onClick={this.handleClick}>Start</button>
          <button style={style} onClick={this.handlePause}>Pause</button>
        </div>
    </div>
  )
}
}

const mapStateToProps = (state)=>{
  return state;
}

export default connect(mapStateToProps, timer)(Stopwatch);
