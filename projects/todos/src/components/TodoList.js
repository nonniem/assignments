import React from "react";
import TodoItemContainer from "./TodoItemContainer";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import AddTodoForm from "./AddTodoForm";

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
        this.handleChange = this.handleChange.bind(this);
        this.postTodo = this.postTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }

    componentDidMount() {
        axios.get("https://api.vschool.io/nonnie/todo").then(response => {
            this.setState({
                todos: response.data.reverse()
            });
        });
    }

    postTodo(e) {
        e.preventDefault();
        if (this.state.newTodo.title === "") {
            alert("You have to provide a title to your todo")
        } else {
            axios.post(`https://api.vschool.io/nonnie/todo/`, this.state.newTodo)
            .then(response => {
                this.setState(prevState => {
                    return {
                        todos: [response.data, ...prevState.todos],
                        newTodo: {
                            title: "",
                            description: ""
                        }
                    }
                })
            }).catch(err => {
                alert(err);
            });
        }

    }

    deleteTodo(id) {
        axios.delete(`https://api.vschool.io/nonnie/todo/${id}`).then(response => {

            this.setState(prevState => {
                const newArr = prevState.todos.filter(item => item._id !== id)
                return {
                    todos: newArr
                }
            });
        });
    }

    editTodo(id, editedTodo){
        axios.put(`https://api.vschool.io/nonnie/todo/${id}`, editedTodo).then((response)=>{
            let newEdit = response.data;
            this.setState((prevState)=>{
                const newTodos = prevState.todos.map((todo)=>{
                    if(todo._id === id){
                        return newEdit
                    } else {
                        return todo;
                    }
                })
                return {
                    ...prevState,
                    todos: newTodos
                }
            })
        })
    }

    handleChange(event) {
        event.persist();
        // const newValue = event.target.value;
        // const name = event.target.name;
        this.setState((prevState) => {
            return {
                newTodo: {
                    ...prevState.newTodo,
                    [event.target.name]: event.target.value
                }
            }
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm={6} smOffset={3} className="style">
                        <AddTodoForm
                            handleChange={this.handleChange}
                            state={this.state}
                            handleSubmit={this.postTodo} />
                    </Col>
                </Row>
                <Row>
                {this.state.todos.map((item, i) => {
                    return (
                        <Col  xs={5} key={item.title + i} className="styled">
                            <TodoItemContainer
                                todo={item}
                                deleteTodo={this.deleteTodo}
                                editTodo={this.editTodo} />
                        </Col>
                    )
                })}
                </Row>
            </div>
        )
    }
}

export default TodoList;
