const state = {
  counter: 0,
  contactList: [
    {
      firstName: "Jerry",
      lastName: "spills",
      phone: "839-399-0212"
    },{
      firstName: "jinx",
      lastName: "tank",
      phone: "849-399-0122"
    },{
      firstName: "splash",
      lastName: "peilbacks",
      phone: "000-399-0212"
    }
  ]
}

const reducer = function(prevState = state, action){
    switch(action.type){
      case "ADD_ONE":
        return{
          ...prevState,
          counter: prevState.counter + 1
        }
      case "SUB_ONE":
        return{
          ...prevState,
          counter: prevState.counter - 1
        }
      case "MULTIPLY":
        return{
          ...prevState,
          counter: prevState.counter * 2
        }
      case "DIVIDE":
        return{
          ...prevState,
          counter: prevState.counter / 3
        }
      case "ZERO":
        return{
          ...prevState,
          counter: 0
        }
      case "REMOVE_FIRST_CONTACT":
      const gameChanger = [...prevState.contactList]
      gameChanger.shift();
        return{
          ...prevState,
          contactList: gameChanger
        }
      default:
        return prevState
    }
}


export default reducer;
