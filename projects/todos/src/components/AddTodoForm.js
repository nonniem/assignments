import React from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";

function AddTodo(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <FormGroup>
                <FormControl
                    type="text"
                    placeholder="Title"
                    value={props.state.newTodo.title}
                    name="title"
                    onChange={props.handleChange}/>
                <FormControl
                    type="text"
                    placeholder="Description"
                    value={props.state.newTodo.description}
                    name="description"
                    onChange={props.handleChange}/>

                <Button
                    bsStyle="submit"
                    bsSize="large"
                    type="submit"
                    className="my-class">kliiq</Button>
            </FormGroup>
        </form>
    )
}

export default AddTodo;
