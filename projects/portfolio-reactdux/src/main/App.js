import React from "react";
import {connect} from "react-redux";
import {} from "../redux/actions/index.js";
import {Button} from "react-bootstrap";

function App(props){
  const background = {
        height: "100px",
        background: "blue",
        textAlign: "center",
        marginTop: "10%",
        color: "white",
        borderRadius: "10%",
        border: "solid 5px black"
  }

  const backgroundd = {
        height: "100px",
        background: "white",
        textAlign: "center",
        marginTop: "20%",
        color: "black",
        borderRadius: "30%",
        border: "solid 5px black"
  }

  const backgrounddd = {
        height: "100px",
        background: "yellow",
        textAlign: "center",
        marginTop: "30%",
        color: "black",
        borderRadius: "50%",
        border: "solid 5px black"
  }

  const backgroundddd = {
        height: "100px",
        background: "limegreen",
        textAlign: "center",
        position: "relative",
        display: "fixed",
        marginTop: "40%",
        color: "blue",
        borderRadius: "75%",
        border: "solid 5px black"
  }

  const buttond = {
    margin: "auto",
    display: "flex",
    position: "relative",
    top: "30%"

  }

  return(
    <div class="container">
        <div class="row">
          <div class="col-xs-3" style={background}>
            <Button style={buttond}>dont</Button>
          </div>
          <div class="col-xs-3" style={backgroundd}>
            <Button style={buttond}>the</Button>
          </div>
          <div class="col-xs-3" style={backgrounddd}>
            <Button style={buttond}>clique</Button>
          </div>
          <div class="col-xs-3" style={backgroundddd}>
            <Button style={buttond}>button</Button>
          </div>
        </div>
    </div>
  )
}


const mapStateToProps = (state)=>{
  return state;
}

export default connect(mapStateToProps, {})(App);
