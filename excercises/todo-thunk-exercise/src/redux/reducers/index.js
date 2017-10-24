import {todos} from "./todos";

const state = {
    todos: []
}

const reducer = function(prevState = state, action){
  return{
      todos: todos(prevState.todos, action)
  }
}

export default reducer;
