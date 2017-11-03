import React from "react";

function projectLayout(props){
    const id = props.match.params.id;
    return(
        <div className="bodyLayout">
            <h4>{props.searchById(id).title}</h4>
            <h4>{props.searchById(id).description}</h4>
            <h4>{props.searchById(id).link}</h4>
        </div>
    )
}


export default projectLayout;
