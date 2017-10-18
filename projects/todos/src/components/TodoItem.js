import React from "react";

function TodoItem(props) {
    return (
        <div>
            <h1 style={{textDecoration: props.editedTodo.completed ? "line-through" : "none"}}>{props.todo.title}</h1>
            <h3>{props.todo.description}</h3>
            <button onClick={() => props.deleteTodo(props.todo._id)}>Delete</button>
            <button onClick={props.handleToggle}>Edit</button>
            <div className={props.toggleDisplay ? "show" : "hide"}>
                <form onSubmit={props.handleSubmit}>
                    <input onChange={props.handleEdit} value={props.editedTodo.title} name="title"type="text"placeholder="Edit Title"/>
                    <input onChange={props.handleEdit} value={props.editedTodo.description} name="description"type="text"placeholder="Edit Description"/>
                    <label>Completed</label>
                    <input onChange={props.handleEdit}type="checkbox" checked={props.editedTodo.completed} name="completed"/>
                    <button type="submit">Save</button>
                </form>
            </div>
            <hr/>
        </div>
    )
}

export default TodoItem;
