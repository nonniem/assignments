let defaultTodo = [];
export function todos(prevTodos = defaultTodo, action){
  let newTodos = [...prevTodos];
    switch(action.type){
      case "ADD_TODO":
        newTodos.push(action.todos);
          return newTodos;

      case "DELETE_TODO":
        return newTodos.filter((todo)=>{
          return action.id !== todo._id
        });
          return newTodos;

      case "LOAD_TODOS":
          return action.todos;
          
      case "EDIT_TODO":
          return newTodos;

        default:
            return prevTodos;
    }
}
