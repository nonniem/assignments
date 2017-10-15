import React from "react";
import Todo from "./components/Todo.js";

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        todoList: [],
        field: ""
      }
      this.listChange = this.listChange.bind(this);
      this.inputGo = this.inputGo.bind(this)
    }

    
    listChange() {
        this.setState((prevState)=>{
          console.log([...prevState.todoList]);
          return {
            todoList: [ this.state.field, ...prevState.todoList],
            field: ""
          }
        })
    }

    inputGo(event) {
        this.setState({
          field: event.target.value
        })
    }

    render() {
      return(
              <Todo items = {this.state.todoList}
                    inputGo = {this.inputGo}
                    change = {this.listChange}
                    field= {this.state.field}
                                                  />
      )
    }
}

export default App;
