import React from "react";
import Presentation from "./Presentation.js";
import { Button, FormGroup } from 'react-bootstrap';
import axios from "axios";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
        todoItems: [],
        newTodo: {
            title: "",
            description: ""
      }
  }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.postTodo = this.postTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

  componentDidMount(){
    this.loadTodos();
  }

  loadTodos(){
    axios.get('https://api.vschool.io/nonnie/todo/').then(response => {
      this.setState({
        todoItems:response.data.reverse()
      });
    });
  }

  postTodo() {
    axios.post('https://api.vschool.io/nonnie/todo/', this.state.newTodo).then(response => {
      this.loadTodos();
    });
  }

  deleteTodo(id) {
    axios.delete(`https://api.vschool.io/nonnie/todo/${id}`).then(response => {
      this.loadTodos();
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
    const klique = {
      color: "black",
      borderRadius: "35%",
      border: "limegreen 2px solid",
      padding: "5px"
    }

    const box = {
      background: "black",
      color: "white",
      border: "limegreen 2px solid",
      margin: "10px",
      padding: "5px",
      borderRadius: "35%"
    }

    const outline = {
        border: "limegreen 3px solid",
        borderRadius: "10%"
}


    return(
      <div>
          <form>
              <FormGroup style={outline}>
                      <input
                        style={box}
                        onChange={this.handleChange}
                        name="title"
                        value={this.state.newTodo.title}
                        placeholder="Type/Enter"
                        type="text"/>

                      <input
                        style={box}
                        onChange={this.handleChange}
                        name="description"
                        value={this.state.newTodo.description}
                        placeholder="Words"
                        type="text"/>

                      <Button style={klique}onClick={this.postTodo}>kLicK</Button>
                        {this.state.todoItems.map((item, i) => {
                          return (
                              <Presentation
                                  todo={item}
                                  key={item.title + i}
                                  deleteTodo={this.deleteTodo}/>
    )
})}
          </FormGroup>
      </form>
  </div>
)}}

export default TodoList;
