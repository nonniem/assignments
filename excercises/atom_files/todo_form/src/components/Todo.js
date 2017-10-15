import React from "react"

function generateItems(items) {
  return items.map((item, index)=>{
        return (
          <li key= {item + index}>{item}</li>
        )
    })
}


// ["test", "potato", "chicken", "mango"];
// [<li>test</li>, <li>potato</li>, <li >chicken</li>, <li>mango</li>]

function Todo(props){
  return(
        <div>
            <input onChange={props.inputGo}
                   type="text"
                   value={props.field}/>
                 <ol>{generateItems(props.items)}</ol>
            <button onClick ={props.change}>Dass Cliq</button>
        </div>
  )
}


export default Todo;
