import React from "react";
import TodoComponent from "./TodoComponent";
import axios from "axios";

class TodoList extends React.Component{
      constructor(){
            super()
            this.state = {
                todoList: []
      }
  }

      componentDidMount(){
        axios.get('https://api.vschool.io/nonnie/todo').then((response) => {
          this.setState({
                          todoList: response.data
      })
   })
}

      render(){
          return  this.state.todoList.map((todo)=>{
                return(
                  <TodoComponent
                    description={todo.description}
                    title={todo.title}
                                      />
      )
    })
  }
}

export default TodoList;
