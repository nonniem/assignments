import React from "react";
import Body from "./Body.js";
import DataList from "./dataList.js"
import DataArray from "./index.json"


function App(){
  return(
      <div>
          <DataList dataArray={DataArray}/>
      </div>
  )};

  export default App;
