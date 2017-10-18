import React from "react";

function Home(props){
  const style ={
    background: "beige",
    height: "100px",
    width: "200px",
    borderRadius: "10%",
    textAlign: "center"
  }

  return(
    <div>
          <h1 style={style}>Fricky Fricky fresh</h1>
    </div>
  )
}

export default Home;
