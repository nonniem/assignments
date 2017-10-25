import axios from "axios";
let todosUrl = "https://api.vschool.io/nonnie/todo/";




export function loadTodos(){
  return (dispatch)=>{
  axios.get(todosUrl).then(response=>{
    dispatch ({
      type: "LOAD_TODOS",
      todos: response.data
    })
  })
  .catch((err)=>{
    console.log(err)
  })
  }
}

export function addTodo(todo){
  return(dispatch)=>{
    axios.post(todosUrl, todo).then((response)=>{
      dispatch ({
        type: "ADD_TODO",
        todos: response.data
      })
    })
  }
}

export function deleteTodo(id){
  return (dispatch)=>{
    axios.delete(todosUrl + id).then(response=>{
      dispatch({
        type: "DELETE_TODO",
        id
      })
    })
      .catch((err)=>{
        console.log(err)
    })
  }
}

export function editTodo(id, editedTodo){
  return (dispatch)=>{
    axios.put(todosUrl + id, editedTodo).then(response=>{
      dispatch({
        type: "EDIT_TODO",
        editedTodo: response.data,
        id
      })
    })
      .catch((err)=>{
        console.log(err)
      })
  }
}
