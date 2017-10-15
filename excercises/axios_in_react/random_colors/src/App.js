import React from "react";
import axios from "axios";
import animateDiv from "./components/animateDiv.js";
import calcSpeed from "./components/calcSpeed.js";
import makeNewPosition from "./components/makeNew.js"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      bgColor: "",
      titleColor: ""
    }
  }

  componentDidMount(){
    axios.get('http://www.colr.org/json/color/random').then((color)=>{
      this.setState({
        bgColor: color.data.new_color
      })
    })
    axios.get('http://www.colr.org/json/color/random').then((color)=>{
      this.setState({
        titleColor: color.data.new_color
      })
    })
  }



  render(){
    const styles={
      width: "40px",
      height: "50px",
      background: `#${this.state.bgColor}`,
      position: "fixed",
      textAlign:"center",
      border: "4px solid black"
    }

    const title={
      fontFamily:"courier",
      paddingTop: "1%",
      color:`#${this.state.titleColor}`

    }
    return(
      <div style={styles}>
           <h5 style={title}>Refresh</h5>
           <h5 style={title}>To</h5>
           <h5 style={title}> CHANGE COLOR</h5>
      </div>
    )
  }
}
export default App;
