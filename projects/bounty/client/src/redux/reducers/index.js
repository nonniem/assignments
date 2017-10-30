import {bounty} from "./bounty";

const state = {
    bounty: []
}

const reducer = function(prevState = state, action){
    return{
        bounty: bounty(prevState.bounty, action)
    }
}

export default reducer;
