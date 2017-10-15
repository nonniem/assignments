import React from "react";
import TodoItem from "./TodoItem.js";
import axios from "axios";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
          todos: [],
          newTodo: {
             title: "",
             description: ""
      }
  }
  this.deleteTodo = this.deleteTodo.bind(this);
  this.postTodo = this.postTodo.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

componentDidMount() {
  axios.get('https://api.vschool.io/nonnie/todo/').then(response => {
    this.setState({
      todos: response.data.reverse()
    });
  });
}

postTodo() {
  axios.post('https://api.vschool.io/nonnie/todo/', this.state.newTodo).then(response => {
    this.setState(prevState => {
      return {
        todos: [response.data, ...prevState.todos]
      }
    })
  });
}

deleteTodo(id) {
  axios.delete(`https://api.vschool.io/nonnie/todo/${id}`).then(response => {
    this.setState(prevState => {
          const newArr = prevState.todos.filter(item => item._id !== id)
          return{
            todos: newArr
       }
     });
   });
 }

handleChange(event) {
  event.persist();
  this.setState((prevState) => {
    return {
      newTodo: {
          ...prevState.newTodo,
          [event.target.name]: event.target.value
      }
    }
  })
}

render() {
    return(
      <div>

        <input
          type = "text"
          placholder = "lisp"
          value={this.state.newTodo.title}
          name="title"
          onChange={this.handleChange}/>

        <input
          type = "text"
          placeholder = "Description"
          value = {this.state.newTodo.description}
          name="description"
          onChange = {this.handleChange}/>

        <button onClick={this.postTodo}>cliq</button>
        {this.state.todos.map((item, i) => {
            return (
              <TodoItem
                  todo={item}
                  key={item.title + i}
                  deleteTodo={this.deleteTodo}/>
            )
        })}
    </div>
    )
  }
todo


export default TodoList;
