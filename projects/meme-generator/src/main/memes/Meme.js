import React from "react";
import {connect} from "react-redux";
import {memes} from "../../redux/actions/";
import {Button} from "react-bootstrap";

function Meme(props){

  const meme = {
    backgroundImage: `url(${props.meme.imgURL})`,
    margin: "20px",
    width: "350px",
    height: "400px",
    objectFit: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center",
    position: "relative",
    border: "solid black 3px"
}

const topComment = {
     top: "0px"
}

const bottomComment = {
      bottom: "0px"
}

const deleteButton = {
    color: "white",
    background: "black"
}



return(
  <div>
     <div style={meme}>
        <h4 style={topComment}>{props.meme.name}</h4>
        <h4 style={bottomComment}>{props.meme.bottom}</h4>
     </div>
     <Button style={deleteButton} onClick={()=>{props.deleteMeme(props.index)}}>Dlete Meme</Button>
  </div>
)
}

export default connect(null, memes)(Meme);
