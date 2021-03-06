import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducer from "./redux/reducers/";
import thunk from "redux-thunk";

import App from "./main/App";

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(()=>{
    console.log(store.getState());
})

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
