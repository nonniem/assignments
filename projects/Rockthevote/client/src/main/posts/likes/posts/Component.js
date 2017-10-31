import React from "react";

function EditPost(props){
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <button>Like</button>
                <h3>Display likes here</h3>
                <button>DisLike</button>
                <h3>Display dislikes here</h3>
            </form>
        </div>
    )
}

export default EditPost;
