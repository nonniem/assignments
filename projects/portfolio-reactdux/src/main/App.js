import React from "react";
import {connect} from "react-redux";
import {} from "../redux/actions/index.js";
import {Button} from "react-bootstrap";

function App(props){
  return(
    <div class="container">
        <div class="row">
          <div class="col-xs-3">
            <Button>Projects</Button>
          </div>
          <div class="col-xs-3">
            <Button>Education</Button>
          </div>
          <div class="col-xs-3">
            <Button>About Me</Button>
          </div>
          <div class="col-xs-3" >
            <Button>Contact</Button>
          </div>
        </div>
    </div>
  )
}


const mapStateToProps = (state)=>{
  return state;
}

export default connect(mapStateToProps, {})(App);
