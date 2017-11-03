import React from "react";
import {politics} from "../../../redux/actions/";
import {connect} from "react-redux";
import EditContainer from "./posts/Container";

function PoliticsComponent(props){
    return(
        <div>
            <h1>{props.post.title}</h1>
            <h1>{props.post.description}</h1>
            <EditContainer
                postId={props.post._id}/>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        politics: state.politics
    }
}

export default connect(mapStateToProps, politics)(PoliticsComponent);
