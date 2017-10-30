import React from "react";
import {politics} from "../../../redux/actions/";
import {connect} from "react-redux";

function PoliticsComponent(props){
    return(
        <div>
            <h1>presentational component</h1>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        politics: state.politics
    }
}

export default connect(mapStateToProps, politics)(PoliticsComponent);
