import {politics} from "./politics";

const state = {
    politics: []
}

const reducer = function(prevState = state, action){
    return{
        politics: politics(prevState.politics, action)
    }
}

export default reducer;
