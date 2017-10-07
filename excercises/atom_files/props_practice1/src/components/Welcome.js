import React from "react";



function Welcome(props){
    return(
          <div style={{background: `url(${props.background}) no-repeat center center`}} className="contacts">
            <h2 className = "textity">Breed: {props.breed}   <br/>Name: {props.name}</h2>
            <h4 className = "dogWeight" >Weight: {props.weight}</h4>
            <img className = "imagity" src={props.img} alt=""/>
            <h4 className = "dogMessage">ps. : {props.msg}</h4>
        </div>
    )};

    export default Welcome;
