import React from "react";
import WrestlerComponent from "./WrestlerComponent"

function WrestlerList(props){
    const wrestlersArray = props.wrestlerArray.map((wrestler, i)=>{
        const color = i % 2 === 0 ? "lightblue": "lightpink";

        return <WrestlerComponent firstName={wrestler.firstName}
                                  lastName={wrestler.lastName}
                                  phone={wrestler.phone}
                                  img={wrestler.img}
                                  key={i}
                                  background={color}/>
    });
    return wrestlersArray
}

export default WrestlerList;
