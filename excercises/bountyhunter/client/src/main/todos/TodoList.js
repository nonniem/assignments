import React from "react";
import {connect} from "react-redux";
import {todos} from "../../redux/actions/";
import TodoComponent from "./todo/Component.js";

class TodoList extends React.Component{
    constructor(){
      super();
      this.genList = this.genList.bind(this);
    }

    genList(){
      return this.props.todos.map((todo, index)=>{
          return <TodoComponent
                    key={todo.title + index}
                    index={index}
                    todo={todo}/>
      })
    }

    componentDidMount(){
          this.props.loadTodos()
    }

    render(){
        return(
          <div>
              {this.genList()}
          </div>

        )
   }
}
const mapStateToProps = (state)=>{
  return {
      todos: state.todos
  }
}

export default connect(mapStateToProps, todos)(TodoList)
