import React from "react";

function WrestlerComponent(props){
    return (
        <div style={{ backgroundColor: props.background }}>
            <h1>{props.firstName} {props.lastName} </h1>
            <h6>{props.phone}</h6>
            <img src={props.img} alt=""/>
        </div>
    )
}

export default WrestlerComponent
