import React from "react";
import PostList from "./posts/PostList.js";
import FormContainer from "./form/Container";

function App(props){
    return(
        <div>
            <FormContainer/>
            <PostList/>
        </div>
    )
}

export default App;
