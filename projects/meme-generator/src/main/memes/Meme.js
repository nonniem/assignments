import React from "react";
import {connect} from "react-redux";
import {memes} from "../../redux/actions/";
import {Button} from "react-bootstrap";

function Meme(props){

  const style = {
    backgroundImage: `url(${props.meme.imgURL})`,
    backgroundSize: "cover",
    width: "300px",
    height: "220px",
    border: "solid black 2px",
    margin: "20px"
}

const userInput = {
      textAlign: "center"
}

const deleteButton = {

}

return(
  <div style={style}>
    <div>
          <h4 style={userInput}>{props.meme.name}</h4>
          <h4 style={userInput}>{props.meme.bottom}</h4>
    </div>
      <Button style={deleteButton} onClick={()=>{props.deleteMeme(props.index)}}>Dlete Meme</Button>
  </div>
)
}

export default connect(null, memes)(Meme);
