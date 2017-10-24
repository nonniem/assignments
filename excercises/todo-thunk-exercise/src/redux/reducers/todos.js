export function todos(prevTodos = [], action){
  let newTodos = [...prevTodos];
    switch(action.type){
      case "ADD_TODO":
        newTodos.push(action.todos);
          return newTodos;
      case "DELETE_TODO":
        newTodos.splice(action.index, 1);
          return newTodos;
      case "LOAD_TODOS":
          return action.todos;
      case "EDIT_TODO":
          return newTodos;
        default:
            return prevTodos;
    }
}
