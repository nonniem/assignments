import React from "react";

function Lemmings(props) {
  return(
    <div>
        <h1>Lemmings Killed: {props.lemmingsKilled}</h1>
        <button onClick={props.killALemming}>Kill a Lemming</button>
        <button onClick={props.saveALemming}>Save a Lemming</button>
    </div>
  )
}

export default Lemmings;
