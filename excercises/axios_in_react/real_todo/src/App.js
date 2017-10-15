import React from "react";
import TodoList from "./components/TodoList.js";


function App(){
  const container ={
    background: "magenta",
    textAlign: "center",
    border: "yellow 5px solid",
    padding: "15px"
  }

  const head = {
    border: "yellow 3px solid",
    borderRadius: "50%"
  }



    return(
        <div style={container}>
            <h3 style={head}>||||| . | . |--!--| . | . |--.Do not do List.--| . | . |--!--| . | . |||||</h3>
            <TodoList/>
        </div>
)};

export default App;
