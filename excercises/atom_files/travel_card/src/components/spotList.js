import React from "react";
import Vacation from "./Vacation.js";

function SpotList(props){
  const spotArray = props.spotArray.map((item, i)=>{

    return <Vacation destination={item.destination}
                    cost={item.cost}
                    climate={item.climate}
                    traveltime={item.traveltime}
                    language={item.language}
                    background={item.background}/>
  });
  return spotArray
}

export default SpotList;
