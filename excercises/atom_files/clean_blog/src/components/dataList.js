import React from "react";
import Body from "./Body.js";

function DataList(props){
    const dataArray = props.dataArray.map((item, i)=>{

      return <Body top={item.top}
                   mid={item.mid}
                   bottom={item.bottom}/>
    });
    return dataArray
}

export default DataList;
