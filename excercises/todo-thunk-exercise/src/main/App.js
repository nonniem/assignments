import React from "react";
import TodoList from "./todos/TodoList";
import FormContainer from "./add-form/Container";

function App(props){
    return(
        <div>
              <FormContainer/>
              <TodoList/>
        </div>
    )
}

export default App;
