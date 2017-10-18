const redux = require("redux");

const state = {
  counter: 10,
  contactList: []
}

function addName(name){
  return {
    type:"ADDNAME",
    name
  }
}

function multiply(){
  return {
    type: "MULTIPLY"
  }
}

function divide(){
  return {
    type: "DIVIDE"
  }
}

function zero(){
  return {
    type: "ZERO"
  }
}

function custom(num){
  return {
    type: "CUSTOM",
    num
  }
}

function removeName(){
    return {
      type: "REMOVE_NAME"
    }
}

function reducer(prevState = state, action){
  switch(action.type){
    case "MULTIPLY":
        return{
          counter: prevState.counter * 20,
          contactList: prevState.contactList
        }
    case "DIVIDE":
        return{
          counter: prevState.counter / 2,
          contactList: prevState.contactList
        }
    case "ZERO":
        return{
          counter: 0,
          contactList: prevState.contactList
        }
    case "CUSTOM":
        return{
          counter: prevState.counter + action.num,
          contactList: prevState.contactList
        }
    case "ADDNAME":
        return{
          contactList: [...prevState.contactList, action.name],
          counter: prevState.counter
        }
    case "REMOVE_NAME":
        const game = [...prevState.contactList]
        game.shift();
        return{
          contactList: game,
          counter: prevState.counter
        }
      default:
        return prevState
   }
}

const store = redux.createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
});


store.dispatch(addName("reggie"))
store.dispatch(addName("bob"))
store.dispatch(addName("ricky"))
store.dispatch(addName("ronald"))
store.dispatch(addName("rue"))
store.dispatch(removeName())
store.dispatch(removeName())
