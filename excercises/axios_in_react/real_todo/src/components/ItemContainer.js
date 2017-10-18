import React from "react";
import TodoList from "./TodoList.js";

class ItemContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggleDisplay: false,
            editTodo: {
                title: props.todoItems.title,
                description: props.todoItems.description,
                completed: props.todoItems.completed
            }
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle(){
        this.setState((prevState)=>{
            return {
                ...prevState,
                toggleDisplay: !prevState.toggleDisplay
            }
        })
    }
    //handle edit function
    handleEdit(event){
        event.persist();
        this.setState((prevState)=>{
            return {
                editTodo: {
                    ...prevState.editTodo,
                    [event.target.name]: event.target.type === "checkbox"? event.target.checked :event.target.value
                }
            }
        });
    }
    //handle submit function
    handleSubmit(event){
        event.preventDefault();
        this.props.editTodo(this.props.todoItems._id, this.state.editTodo);
    }
    render(){
        return (
            <TodoItem
                todo={this.props.todo}
                deleteTodo={this.props.deleteTodo}
                editedTodo={this.state.editTodo}
                handleEdit={this.handleEdit}
                handleSubmit = {this.handleSubmit}
                toggleDisplay = {this.state.toggleDisplay}
                handleToggle = {this.handleToggle}
                />
        )
    }
}
export default ItemContainer;
