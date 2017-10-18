import React from "react";


function Footer(props){
  const container = {
    height: "150px",
    width: "25%"
  }
  return(
    <div className="footer">
        <img style={container} src="https://media.giphy.com/media/pFr7domixBhHG/giphy.gif" alt="gif"/>
        <img style={container} src="https://media.giphy.com/media/5xaOcLOqNmWHaLeB14I/giphy.gif" alt="gif"/>
        <img style={container} src="https://media.giphy.com/media/QOtB6koPGiT1S/giphy.gif" alt="gif"/>
        <img style={container} src="https://media.giphy.com/media/ddUReA4dDqWNW/giphy.gif" alt="gif"/>
    </div>
  )
}

export default Footer;
